import { useEffect, useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import StarsCanvas from "../../../components/starbackground";

export function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [passwordErr, setPasswordErr] = useState("");

  useEffect(() => {
    document.title = "Reset Password";
    setPassword("");
    setConfirmPassword("");
  }, []);

  async function HandleResetPassword() {
    if (password === "" && confirmPassword === "") {
      setPasswordErr("Please fill all the fields");
    } else if (password === "") {
      setPasswordErr("Please fill the password field");
    } else if (confirmPassword === "") {
      setPasswordErr("Please fill the confirm password field");
    } else if (password !== confirmPassword) {
      setPasswordErr("Passwords do not match");
    }
  }

  return (
    <>
      <StarsCanvas />
      <main className="bg-black min-h-screen flex justify-center items-center px-4 sm:px-8 lg:px-16">
        <div className="relative bg-transparent backdrop-blur-xs border-2 border-solid p-6 rounded-2xl shadow-3xl shadow-white m-2 w-full sm:max-w-md lg:max-w-lg">
          <div className="flex justify-center items-center mb-6 lg:mb-8">
            <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-thin">
              Enter New Password
            </h2>
          </div>
          <form>
            <div className="flex mb-6 lg:mb-8 justify-center">
              <p className="text-white text-center text-xs sm:text-lg lg:text-xl font-thin w-[90%]">
                Your new password must be different from previously used
                passwords
              </p>
            </div>
            <div className="mb-4 lg:mb-6">
              <FloatLabel>
                <div className="relative">
                  <InputText
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-white text-sm sm:text-base lg:text-md w-full h-8 sm:h-9 lg:h-10 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                    id="password"
                    type={isVisible ? "text" : "password"}
                  />
                  <div
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                  >
                    <i
                      className={isVisible ? "pi pi-eye" : "pi pi-eye-slash"}
                      style={{ color: "white" }}
                    ></i>
                  </div>
                </div>
                <label
                  className="duration-300 block text-sm sm:text-md lg:text-md font-medium text-white ml-2"
                  htmlFor="password"
                >
                  Password
                </label>
              </FloatLabel>
            </div>

            <div className="mb-4 lg:mb-6">
              <FloatLabel>
                <div className="relative">
                  <InputText
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="text-white text-sm sm:text-base lg:text-lg w-full h-8 sm:h-9 lg:h-10 p-2 border-2 shadow-white shadow-sm bg-black rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                    id="confirmPassword"
                    type={isVisible ? "text" : "password"}
                  />
                  <div
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
                  >
                    <i
                      className={isVisible ? "pi pi-eye" : "pi pi-eye-slash"}
                      style={{ color: "white" }}
                    ></i>
                  </div>
                </div>
                <label
                  className="duration-300 block text-sm sm:text-md lg:text-md font-medium text-white ml-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
              </FloatLabel>
              <small
                id="password-help"
                className={`${
                  passwordErr ? "visible" : "hidden"
                } text-rose-500`}
              >
                {passwordErr}
              </small>
            </div>

            <div className="flex justify-center items-center mt-8">
              <button
                type="button"
                className="w-[90%] sm:w-[70%] lg:w-[60%] border-2 shadow-white shadow-3xl text-white py-2 rounded-md duration-300 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={HandleResetPassword}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
