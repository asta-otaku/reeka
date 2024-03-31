import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardNav from "../components/DashboardNav";
import { useLocation } from "react-router-dom";
import { Calendar, ChevronDownIcon } from "../assets/icons";
import { getDateRange } from "../helpers/getDate";
import IndvidualIndex from "../components/IndvidualIndex";
import IndividualCalendar from "../components/IndividualCalendar";

function IndividualProperySummary() {
  const location = useLocation();
  const property = location.state || {};
  const [step, setStep] = useState(1);
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Portfolio Operation" />
        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          {property.propertyName}
        </h3>

        <div className="flex flex-col gap-4 md:flex-row w-full items-center justify-between mt-3 px-6">
          <div className="flex flex-wrap justify-center md:justify-start items-center max-w-2xl w-full gap-2">
            <div className="flex p-0.5 rounded gap-1 bg-[#F5F5F5]">
              <button
                onClick={() => setStep(1)}
                className={`px-5 py-2 font-bold text-xs rounded ${
                  step == 1 ? "text-primary" : "text-[#4F4F4F] bg-white"
                }`}
              >
                Finance
              </button>
              <button
                onClick={() => setStep(2)}
                className={`px-5 py-2 font-bold text-xs rounded ${
                  step == 2 ? "text-primary" : "text-[#4F4F4F] bg-white"
                }`}
              >
                Calendar
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 w-fit">
              <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                <option>Hidden Leaf</option>
              </select>
              <ChevronDownIcon width={12} />
            </div>
            <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 w-fit">
              <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                <option>Monthly</option>
              </select>
              <ChevronDownIcon width={12} />
            </div>
            <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 w-fit">
              <Calendar width={12} />
              <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                <option>{getDateRange()}</option>
              </select>
            </div>
          </div>
          <button
            className={`bg-primary px-5 py-2 rounded-xl text-white text-sm border  border-primary shadow-inner shadow-black/20 ${
              step == 1 && "hidden"
            }`}
          >
            Create Reservation
          </button>
        </div>

        <div className="my-6 px-6">
          {
            {
              1: <IndvidualIndex property={property} />,
              2: <IndividualCalendar property={property} />,
            }[step]
          }
        </div>
      </div>
    </DashboardLayout>
  );
}

export default IndividualProperySummary;
