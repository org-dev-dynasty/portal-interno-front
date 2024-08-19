import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import StarsCanvas from "../../../components/starbackground";

export function Register() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Forgot Password";
    setEmail("");
  } , []);

  return (
    <>
      <StarsCanvas />
      <main className="bg-black min-h-screen flex justify-center items-center">
        <div className="absolute bg-transparent backdrop-blur-xs border-2 border-solid p-4 rounded-2xl shadow-3xl shadow-white m-2 w-64 h-80 sm:w-112 sm:h-96 lg:w-144 lg:h-128 lg:p-8">
          <div className="flex justify-center items-center mb-7 lg:mb-8">
            <h2 className="text-white text-4xl font-thin">
              Forgot Your Password?
            </h2>
          </div>
          <form>
            <div className="flex mb-8 sm:mb-10 lg:mb-12 justify-center">
              <p className="text-white text-center text-xl font-thin w-[85%]">
                Enter your e-mail and we will send you instructions to reset
                your password
              </p>
            </div>
            <div className="mb-7 sm:mb-9 lg:mb-10">
              <FloatLabel>
                <div className="relative">
                  <InputText
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="pr-10 text-white text-2xs w-full h-6 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs sm:h-8 lg:text-sm lg:h-10"
                    value={email}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="pi pi-user" style={{ color: "white" }}></i>
                  </div>
                </div>
                <label
                  className="duration-300 block text-xs font-big text-white ml-2 lg:text-sm"
                  htmlFor="user"
                >
                  Email
                </label>
              </FloatLabel>
              {/* <small
                id="user-help"
                className={`${emailErr ? "visible" : "hidden"} text-rose-500`}
              >
                {emailErr}
              </small> */}
            </div>
            <div className="relative w-full">
              <div className="flex justify-between items-center mt-0 flex-col-reverse">
                <button
                  type="button"
                  className="text-xs w-[45%] border-2 shadow-white shadow-3xl text-white ml-1 py-2 rounded-md duration-300 mt-5 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 sm:mt-6 lg:ml-4 lg:mt-8 lg:text-sm">
                  <Link to={'/verifyCode'}>Continue</Link>
                </button>
              </div>
            </div>
            {/* <div className="text-center mt-10 ">
                            <p className="text-white">Don't have an account? <Link to={'/register'} className="text-blue-500 underline">Register</Link></p>
                        </div> */}
          </form>
        </div>
      </main>
    </>
  );
}
