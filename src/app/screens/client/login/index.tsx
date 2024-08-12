import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../../../context/client_context";
import LooperGroup from "../../../../assets/logo.png";
import { FloatLabel } from 'primereact/floatlabel';
import StarsCanvas from "../../../components/starbackground"
import { InputText } from "primereact/inputtext";
import 'primeicons/primeicons.css';
        
        


export function Login() {

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [isVisible, setIsVisible] = useState(false)
    const { signIn } = useContext(ClientContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    async function RandomLogin() {
        setEmailErr("")
        setPasswordErr("")
        if(email === "" && password === ""){
            setEmailErr("Please fill all the fields")
            setPasswordErr("Please fill all the fields")
        } else if (email === ""){
            setEmailErr("Please fill the email field")
        } else if (password === ""){
            setPasswordErr("Please fill the password field")
        } 

        const response = await signIn(email, password)
        console.log(response)
    }

    useEffect(() => {
        setEmail("")
        setPassword("")
    }, [])


    return (
        <>
            <StarsCanvas />
            <main className="bg-black min-h-screen flex justify-center items-center" >
                <div className="absolute bg-transparent backdrop-blur-xs border-2 border-solid p-8 rounded-2xl shadow-3xl shadow-white m-2 w-144 h-144" >
                    <div className="flex justify-center items-center mb-20" >
                        <img src={LooperGroup} alt="logo" />
                    </div>
                    <form >
                        <div className="mb-10">
                            <FloatLabel>
                            <div className="relative">
                                <InputText 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="pr-10 text-white w-full h-10 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                    value={email} 
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2"><i className="pi pi-user" style={{color: 'white'}}></i></div>
                            </div>
                                <label className="duration-300 block text-sm font-big text-white ml-2" htmlFor="user">Email</label>
                            </FloatLabel>
                            <small id="user-help" className={`${emailErr ? "visible" : "hidden"} text-rose-500`}>{emailErr}</small>
                        </div>
                        <div className="mb-8">
                            <FloatLabel>
                                <div>
                                    <InputText 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className="text-white w-full h-10 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                        id="password" 
                                        type={isVisible ? 'text' : 'password'}
                                        size={30} 
                                    />
                                    <div onClick={() => setIsVisible(!isVisible)} className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
                                        <i className={isVisible ? 'pi pi-eye' : 'pi pi-eye-slash'} style={{color: 'white'}}></i>
                                    </div>
                                </div>
                                <label className="duration-300 block text-sm font-big text-white ml-2" htmlFor="password">Password</label>
                            </FloatLabel>
                            <small id="password-help" className={`${passwordErr ? "visible" : "hidden"} text-rose-500`}>{passwordErr}</small>
                        </div>
                        <div className="flex justify-end mb-8 mr-2">
                            <Link to={'/register'} className="object-right text-blue-500 underline">
                                <p>Esqueci minha senha</p>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <button type="button" className="font-medium- mt-4 w-[30%] backdrop-blur-l border-2 shadow-white shadow-3xl text-white py-2 rounded-md duration-300 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50" onClick={RandomLogin}>Login</button>
                        </div>
                        {/* <div className="text-center mt-10 ">
                            <p className="text-white">Don't have an account? <Link to={'/register'} className="text-blue-500 underline">Register</Link></p>
                        </div> */}
                    </form>
                </div>
            </main>
        </>
    )
}