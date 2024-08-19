import { useEffect, useRef, useState } from "react";
import StarsCanvas from "../../../components/starbackground";
import React from "react";
import { Link } from "react-router-dom";

export function VerifyCode() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value.substring(value.length - 1);
      setOtp(newOTP);

      if (value) {
        if (index < otp.length - 1) {
          setActiveOTPIndex(index + 1);
        }
      } else if (index > 0) {
        setActiveOTPIndex(index - 1);
      }
    }
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setActiveOTPIndex(index - 1);
    }
  };

  useEffect(() => {
    inputRefs.current[activeOTPIndex]?.focus();
  }, [activeOTPIndex]);

  useEffect(() => {
    document.title = "Verify Code";
  }, []);

  return (
    <>
      <StarsCanvas />
      <main className="bg-black min-h-screen flex justify-center items-center">
        <div className="absolute bg-transparent backdrop-blur-xs border-2 border-solid p-4 rounded-2xl shadow-3xl shadow-white m-2 w-64 h-80 sm:w-112 sm:h-96 lg:w-144 lg:h-128 lg:p-8">
          <div className="flex justify-center items-center mb-7 lg:mb-8">
            <h2 className="text-white text-4xl font-thin">Verify Code</h2>
          </div>
          <form>
            <div className="flex mb-8 sm:mb-10 lg:mb-12 justify-center">
              <p className="text-white text-center text-xl font-thin w-[70%]">
                Please enter the 6 digit code that was sent to your email
              </p>
            </div>
            <div className="flex mb-4 justify-center items-center space-x-2">
              {otp.map((digit, index) => (
                <React.Fragment key={index}>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-white focus:border-gray-400 focus:text-gray-400 text-white transition"
                    onChange={(e) => handleOnChange(e, index)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={digit}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center w-[100%]">
              <p className="text-white font-thin">
                Didn't receive an email?{" "}
                <button className="font-normal hover:underline">Resend</button>
              </p>
            </div>
            <div className="relative w-full">
              <div className="flex justify-between items-center mt-0 flex-col-reverse">
                <button
                  type="button"
                  className="text-xs w-[45%] border-2 shadow-white shadow-3xl text-white ml-1 py-2 rounded-md duration-300 mt-5 hover:bg-LIGHT_ORANGE focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 sm:mt-6 lg:ml-4 lg:mt-8 lg:text-sm"
                >
                  <Link to={'/resetPassword'}>Continue</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
