import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ExclamationCircleIcon,
} from "../assets/icons";

function App() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-primary w-screen h-screen px-4">
      {
        {
          1: (
            <div className="max-w-sm md:max-w-md w-full bg-white rounded-2xl flex flex-col items-start p-4 md:p-8">
              <Link
                to="/"
                className="self-end text-primary font-bold text-sm py-2 px-3 bg-[#F5F5F5] rounded-xl"
              >
                Have an account? Sign in
              </Link>
              <div className="mt-12 flex flex-col gap-6 w-full">
                <h2 className="font-modak text-4xl text-primary">Reeka</h2>
                <p className="text-secondary text-xs">
                  Step <span className="text-deepBlue">1</span>/3
                </p>
                <h3 className="text-deepBlue text-2xl font-semibold">
                  Hey 🖐️
                  <br />
                  Welcome to Reeka
                </h3>
                <p className="text-secondary text-xs w-[85%]">
                  Let's get to know you so we can start managing your properties
                </p>
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center justify-center bg-primary hover:bg-white border border-solid border-primary font-bold text-white hover:text-primary py-2 rounded-lg"
                >
                  Get Started
                  <ArrowLongRightIcon className="w-5 text-5 ml-2" />
                </button>
              </div>
            </div>
          ),
          2: (
            <div className="max-w-sm md:max-w-md w-full bg-white rounded-2xl flex flex-col items-start p-4 md:p-8">
              <span onClick={() => setStep(1)}>
                <ArrowLongLeftIcon className="w-5 text-5 cursor-pointer" />
              </span>
              <p className="text-secondary text-xs my-3">
                Step <span className="text-deepBlue">2</span>/3
              </p>
              <h2 className="font-semibold text-xl text-deepBlue">
                Account Details
              </h2>

              <form className="flex flex-col gap-4 w-full mt-4">
                <div className="flex justify-between gap-4 w-full">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="bg-transparent w-1/2 py-2 px-4 border border-solid rounded-lg text-sm font-semibold outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-transparent w-1/2 py-2 px-4 border border-solid rounded-lg text-sm font-semibold outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="bg-transparent w-full py-2 px-4 border border-solid rounded-lg text-sm font-semibold outline-none"
                  />
                </div>
                <div className="flex items-center">
                  <span>
                    <PhoneInput
                      country={"au"}
                      autoFormat={false}
                      containerStyle={{
                        border: "1px solid #F7F7F7",
                        borderStartStartRadius: 8,
                        borderEndStartRadius: 8,
                      }}
                      buttonStyle={{
                        border: "none",
                        width: 0,
                      }}
                      inputStyle={{
                        width: "80px",
                        border: "none",
                        color: "grey",
                      }}
                    />
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="bg-transparent w-full py-2 px-4 border border-solid rounded-e-lg text-sm font-semibold outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="noOfProperties"
                    placeholder="Number of Properties to be Managed"
                    className="bg-transparent w-full py-2 px-4 border border-solid rounded-lg text-sm font-semibold outline-none"
                  />
                </div>
                <button
                  onClick={(e: any) => {
                    e.preventDefault();
                    setStep(3);
                  }}
                  className="flex items-center justify-center bg-primary hover:bg-white border border-solid border-primary font-bold text-white hover:text-primary py-2 rounded-lg"
                >
                  Next
                  <ArrowLongRightIcon className="w-5 text-5 ml-2" />
                </button>
              </form>
            </div>
          ),
          3: (
            <div className="max-w-sm md:max-w-xl w-full bg-white rounded-2xl flex flex-col items-start px-4 py-8">
              <span onClick={() => setStep(2)}>
                <ArrowLongLeftIcon className="w-5 text-5 cursor-pointer" />
              </span>
              <div className="flex justify-between items-center w-full my-3">
                <p className="text-deepBlue text-xs">Step 3/3</p>
                <Link
                  to="/login"
                  className="self-end text-primary font-bold text-sm py-2 px-3 bg-[#F5F5F5] rounded-xl"
                >
                  Do later
                </Link>
              </div>
              <h2 className="font-semibold text-xl text-deepBlue">
                Property Information
              </h2>

              <div className="flex flex-col gap-6 w-full mt-4">
                <div className="flex items-center flex-col md:flex-row justify-between w-full gap-4">
                  <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
                    <Link to="/integration"></Link>
                    <button className="p-2 bg-white text-[#27AE60] font-semibold text-xs self-end rounded-xl">
                      Connect
                    </button>

                    <p className="text-sm font-semibold">AirBnB</p>
                    <p className="text-xs text-secondary font-medium max-w-3/5">
                      Integration of these platform makes it easy for your
                      property to have more integrations
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] md:w-1/2 p-4 rounded-xl flex flex-col gap-2">
                    <Link to="/integration">
                      <button className="p-2 bg-white text-[#27AE60] font-semibold text-xs self-end rounded-xl">
                        Connect
                      </button>
                    </Link>

                    <p className="text-sm font-semibold">Bookings.com</p>
                    <p className="text-xs text-secondary font-medium max-w-3/5">
                      Integration of these platform makes it easy for your
                      property to have more integrations
                    </p>
                  </div>
                </div>
                <div className="bg-[#907E73] flex items-center justify-center gap-1 rounded-lg w-full py-2.5 px-1 text-sm">
                  <ExclamationCircleIcon className="w-5 h-5 text-white" />
                  <p className="text-white text-xs font-medium">
                    Integration to these platform makes it easy for your
                    property to have more integrations
                  </p>
                </div>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center justify-center bg-primary font-bold text-white py-2 rounded-lg"
                >
                  Next
                  <ArrowLongRightIcon className="w-5 text-5 ml-2" />
                </button>
              </div>
            </div>
          ),
        }[step]
      }
    </div>
  );
}

export default App;
