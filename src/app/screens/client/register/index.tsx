import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import StarsCanvas from "../../../components/starbackground";

export function Register() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Forgot Password";
    setEmail("");
  }, []);

  const handleContinue = () => {
    async function loginVerify() {
      const response = localStorage.getItem("token");
      if (response) {
        navigate("/verifyCode");
      }
    }
    if (email === "") {
      setEmailErr("Please fill the email field");
    } else {
      loginVerify();
    }
  };

  return (
    <>
      <StarsCanvas />
      <main className="bg-black min-h-screen flex justify-center items-center ">
        <div className="flex flex-col bg-transparent backdrop-blur-xs border-2 border-solid p-4 rounded-2xl shadow-3xl shadow-white m-2 w-64 h-80 sm:w-96 sm:h-112 lg:w-128 lg:h-128  lg:p-8">
          <div className="flex justify-center items-center mb-5 sm:mb-7 lg:mb-8">
            <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-thin text-center">
              Forgot Your Password?
            </h2>
          </div>
          <form>
            <div className="flex mb-5 sm:mb-7 lg:mb-8 justify-center">
              <p className="text-white text-center text-xs sm:text-lg lg:text-xl font-thin w-[85%]">
                Enter your e-mail and we will send you instructions to reset
                your password
              </p>
            </div>
            <div className="mb-5 sm:mb-7 lg:mb-8">
              <FloatLabel>
                <div className="relative">
                  <InputText
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="pr-10 text-white text-xs sm:text-sm lg:text-base w-full h-8 sm:h-10 lg:h-10 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={email}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="pi pi-user" style={{ color: "white" }}></i>
                  </div>
                </div>
                <label
                  className="duration-300 block text-xs sm:text-sm lg:text-md font-medium text-white ml-2"
                  htmlFor="user"
                >
                  Email
                </label>
              </FloatLabel>
              <small
                id="user-help"
                className={`${emailErr ? "visible" : "hidden"} text-rose-500`}
              >
                {emailErr}
              </small>
            </div>
            <div className="relative w-full">
              <div className="flex justify-center items-center mt-0 flex-col-reverse">
                <button
                  type="button"
                  className="text-xs sm:text-sm lg:text-base w-[50%] sm:w-[45%] lg:w-[40%] border-2 shadow-white shadow-3xl text-white py-2 rounded-md duration-300 mt-5 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
