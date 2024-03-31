import useStore from "../store";
import close from "../assets/xmark.svg";
import flag from "../assets/flag.svg";
import { ChevronDownIcon } from "../assets/icons";

function ReportModal() {
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
      <h3 className="text-lg font-medium text-deepBlue my-4">Report Name</h3>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">Property*</h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">From</h4>
            <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
              <input
                placeholder="Name"
                className="w-1/2 outline-none bg-transparent"
              />
              <ChevronDownIcon width={16} />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">To</h4>
            <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
              <input
                placeholder="Name"
                className="w-1/2 outline-none bg-transparent"
              />
              <ChevronDownIcon width={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">File Format</h4>
          <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
            <input
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
            <ChevronDownIcon width={16} />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full gap-4 mt-6">
        <button className="bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2  font-semibold text-[#344054] w-1/2">
          Preview
        </button>
        <button className="bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md w-1/2">
          Export
        </button>
      </div>
    </div>
  );
}

export default ReportModal;
