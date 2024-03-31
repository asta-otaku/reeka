import useStore from "../../store";
import close from "../../assets/xmark.svg";
import flag from "../../assets/flag.svg";
import { ChevronDownIcon } from "../../assets/icons";
import { DatePicker } from "antd";

function CreateReservation() {
  const setModal = useStore((state: any) => state.setModal);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-w-xs md:max-w-lg w-full bg-white rounded-lg flex flex-col items-start p-5 z-[200]"
    >
      <div className="flex justify-between items-center w-full">
        <img src={flag} alt="" className="cursor-pointer" />
        <span onClick={() => setModal(null)} className="cursor-pointer">
          <img src={close} alt="" />
        </span>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-medium text-deepBlue">
          Create Reservations
        </h3>
        <p className="mt-1 text-[#475467] text-sm">
          Create your reservation manually
        </p>
      </div>

      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">Name*</h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">Email Address*</h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">Phone No*</h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Phone No"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">
            Number of Guest*
          </h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Number of Guest"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">
            Duration of Stay*
          </h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Duration of Stay"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">
            Price Per Night*
          </h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Number of Guest"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">
              Check In Date
            </h4>
            <DatePicker
              placeholder="Choose Date"
              className="py-2 focus-within:border-[#D0D5DD]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">
              Check Out Date
            </h4>
            <DatePicker
              placeholder="Choose Date"
              className="py-2 focus-within:border-[#D0D5DD]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full gap-4 mt-6">
        <button
          onClick={() => setModal(null)}
          className="bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2  font-semibold text-[#344054] w-1/2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            alert("Done");
            setModal(null);
          }}
          className="bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md w-1/2"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateReservation;
