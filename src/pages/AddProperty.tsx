import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";
import useStore from "../store";
import add from "../assets/add.svg";
import close from "../assets/xmark.svg";
import flag from "../assets/flag.svg";

function AddProperty() {
  const setModal = useStore((state: any) => state.setModal);
  const [rules, setRules] = useState([]);
  const [facilities, setFacilities] = useState([]);
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Portfolio Operations" />
        <div className="my-4 px-6">
          <h3 className="text-deepBlue font-medium text-2xl">Add Property</h3>
          <p className="text-xs text-[#6D6D6D]">
            Manage your managers and their account permissions here.
          </p>
        </div>

        <div className="px-4">
          <div className="bg-[#FAFAFA] max-w-lg w-full mx-auto py-4 px-1 rounded-xl">
            <h4 className="font-medium text-deepBlue px-3">Property Details</h4>
            <form className="mt-2">
              <div className="bg-white rounded-xl flex flex-col gap-2 p-4">
                <div className="flex flex-col gap-2 w-full">
                  <h4 className="text-[#344054] text-sm font-medium">
                    Property Name*
                  </h4>
                  <div>
                    <input
                      placeholder="Name"
                      className=" bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h4 className="text-[#344054] text-sm font-medium">
                    Property's Location
                  </h4>
                  <div>
                    <input
                      placeholder="Location"
                      className=" bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h4 className="text-[#344054] text-sm font-medium">
                    Property's Address*
                  </h4>
                  <div>
                    <input
                      placeholder="116 John Street, Manhattan, New York"
                      className=" bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full outline-none"
                    />
                  </div>
                </div>

                {/* Rules and Facilities */}
                <div className="flex flex-col w-full gap-3 mt-2">
                  <h2 className="text-xs font-medium text-deepBlue">
                    Additional Details
                  </h2>
                  <div className="flex flex-col w-full gap-2">
                    <h5 className="text-secondary font-medium text-[10px]">
                      House Rules
                    </h5>

                    {rules.map((rule, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <input
                          type="checkbox"
                          id={rule}
                          name={rule}
                          value={rule}
                        />
                        <label
                          htmlFor={rule}
                          className="text-[#828282] text-xs"
                        >
                          {rule}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setModal(
                        <Modal
                          title="Create Rule"
                          state={rules}
                          placeholder="Type Rule"
                          setState={setRules}
                        />
                      )
                    }
                    type="button"
                    className="flex items-center gap-2 "
                  >
                    <img src={add} alt="add" className="w-4" />
                    <span className="text-[10px] text-primary">
                      Add new rule
                    </span>
                  </button>

                  <div className="flex flex-col w-full gap-2">
                    <h5 className="text-secondary font-medium text-[10px]">
                      House Facilities/Equipment
                    </h5>

                    {facilities.map((rule, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <input
                          type="checkbox"
                          id={rule}
                          name={rule}
                          value={rule}
                        />
                        <label
                          htmlFor={rule}
                          className="text-[#828282] text-xs"
                        >
                          {rule}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setModal(
                        <Modal
                          title="Add Facility/Equipment"
                          state={facilities}
                          setState={setFacilities}
                        />
                      )
                    }
                    type="button"
                    className="flex items-center gap-2 "
                  >
                    <img src={add} alt="add" className="w-4" />
                    <span className="text-[10px] text-primary">
                      Add new facility/Equipment
                    </span>
                  </button>
                </div>
              </div>

              <div className="w-[90%] mx-auto">
                <button className="mt-6 bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md w-full">
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AddProperty;

function Modal({
  title,
  state,
  setState,
  placeholder,
}: {
  title: string;
  state: string[];
  setState: any;
  placeholder?: string;
}) {
  const setModal = useStore((state: any) => state.setModal);
  const [formValue, setFormValue] = useState("");
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-xs md:max-w-md w-full bg-white rounded-lg flex flex-col items-start p-5 z-[200]"
    >
      <div className="flex justify-between items-center w-full">
        <img src={flag} alt="" className="cursor-pointer" />
        <span onClick={() => setModal(null)} className="cursor-pointer">
          <img src={close} alt="" />
        </span>
      </div>
      <h3 className="text-lg font-medium text-deepBlue my-4">{title}</h3>
      <form className="w-full">
        <textarea
          rows={4}
          className="rounded-xl w-full border border-solid p-3"
          onChange={(e) => setFormValue(e.target.value)}
          placeholder={placeholder || ""}
        />
        <button
          type="button"
          onClick={(e: any) => {
            e.preventDefault();
            setState([...state, formValue]);
            setModal(null);
          }}
          className="mt-6 bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md w-full"
        >
          {placeholder ? "Create new Rule" : "Add"}
        </button>
      </form>
    </div>
  );
}
