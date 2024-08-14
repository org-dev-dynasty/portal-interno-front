import { AxiosInstance } from "axios";
import { IClientRepository } from "../../../modules/client/domain/repositories/client_repository_interface";
import { Client, JsonClientProps } from "../../domain/entites/client";
import { SignInResponse } from "../../domain/types/client_responses";
import { useNavigate } from "react-router-dom";

export class ClientRepositoryHttp implements IClientRepository {
    constructor(private readonly httpClient: AxiosInstance) { }
    
    async signIn(email: string, password: string): Promise<SignInResponse> {
        const navigate = useNavigate();
        try {
            const response = await this.httpClient.post<SignInResponse>('/client', { email, password })
            console.log('AQUI ESTA A RESPOSTA SIGNIN')
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            }
            return response.data as SignInResponse;
        } catch (error: any) {
            console.log('ERRO DA RESPONSE', error.response.data);
            throw new Error(error)
        }
    }

    async signUp(name: string, phone: string, cpf:string, email: string, password: string): Promise<Client> {
        try {
            const response = await this.httpClient.post<JsonClientProps>('/client', { name, phone, cpf, email, password })
            const client = Client.fromJson(response.data)
            return client

        } catch (error: any) {
            throw new Error(error)
        }
    }

    async updateName(newName: string): Promise<Client> {
        try{
            const response = await this.httpClient.post<JsonClientProps>('/client', {newName})
            const client = Client.fromJson(response.data)
            return client
            
        } catch (error: any){
            throw new Error(error)
        }
    }
}

