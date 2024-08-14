import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../../../context/client_context";
import LooperGroup from "../../../../assets/logo.png";
import { FloatLabel } from 'primereact/floatlabel';
import StarsCanvas from "../../../components/starbackground"
import { InputText } from "primereact/inputtext";
import 'primeicons/primeicons.css';
        
    
export function Login() {
    const navigate = useNavigate();
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [isVisible, setIsVisible] = useState(false)
    const { signIn } = useContext(ClientContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    useEffect(() => {
        async function loginVerify() {
            const response = localStorage.getItem('token');
            if (response) {
                navigate('/portalInterno');
            }
        }
        loginVerify();
        setEmail("")
        setPassword("")
    }, [])


    async function HandleLogin() {
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
        console.log('RESPONSEEEE', response)
        if (response) {
            alert('Login efeutuado com sucesso')
            localStorage.setItem('token', response.token)
            navigate('/portalInterno')
        }

    }



    return (
        <>
            <StarsCanvas />
            <main className="bg-black min-h-screen flex justify-center items-center" >
                <div className="absolute bg-transparent backdrop-blur-xs border-2 border-solid p-4 rounded-2xl shadow-3xl shadow-white m-2 w-64 h-80 sm:w-112 sm:h-96 lg:w-144 lg:h-128 lg:p-8" >
                    <div className="flex justify-center items-center mb-10 lg:mb-20" >
                        <img src={LooperGroup} alt="logo" />
                    </div>
                    <form >
                        <div className="mb-7 sm:mb-9 lg:mb-10">
                            <FloatLabel>
                            <div className="relative">
                                <InputText 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="pr-10 text-white text-2xs w-full h-6 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs sm:h-8 lg:text-sm lg:h-10" 
                                    value={email} 
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2"><i className="pi pi-user" style={{color: 'white'}}></i></div>
                            </div>
                                <label className="duration-300 block text-xs font-big text-white ml-2 lg:text-sm" htmlFor="user">Email</label>
                            </FloatLabel>
                            <small id="user-help" className={`${emailErr ? "visible" : "hidden"} text-rose-500`}>{emailErr}</small>
                        </div>
                        <div className="mb-1 lg:mb-1">
                            <FloatLabel>
                                <div>
                                    <InputText 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className="text-white text-2xs w-full h-6 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs sm:h-8 lg:text-sm lg:h-10 lg:text-sm" 
                                        id="password" 
                                        type={isVisible ? 'text' : 'password'}
                                        size={30} 
                                    />
                                    <div onClick={() => setIsVisible(!isVisible)} className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
                                        <i className={isVisible ? 'pi pi-eye' : 'pi pi-eye-slash'} style={{color: 'white'}}></i>
                                    </div>
                                </div>
                                <label className="duration-300 block text-xs font-big text-white ml-2 lg:text-sm" htmlFor="password">Password</label>
                            </FloatLabel>
                            <small id="password-help" className={`${passwordErr ? "visible" : "hidden"} text-rose-500`}>{passwordErr}</small>
                        </div>
                        <div className="relative w-full">
                            <div className="flex justify-between items-center mt-0 flex-col-reverse">
                                <button 
                                    type="button" 
                                    className="text-xs w-[45%] border-2 shadow-white shadow-3xl text-white ml-1 py-2 rounded-md duration-300 mt-5 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 sm:mt-6 lg:ml-4 lg:mt-8 lg:text-sm" 
                                    onClick={HandleLogin}>
                                    Login
                                </button>
                                <div className="flex justify-end w-[100%]">
                                    <Link to={'/register'} className="text-LIGHT_ORANGE text-xs underline sm:mt-3 lg:mt-0 lg:mr-4 lg:text-sm">
                                        Forgot my password
                                    </Link>
                                </div>
                            </div>
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