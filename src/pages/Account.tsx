import { ChevronDownIcon } from "../assets/icons";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";

function Account() {
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Account" />

        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          Account
        </h3>

        <form className="my-5 max-w-lg w-full mx-auto flex flex-col gap-3 p-4">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-full">
              <h4 className="text-[#344054] text-sm font-medium">
                First Name*
              </h4>
              <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
                <input
                  placeholder="Name"
                  className="w-1/2 outline-none bg-transparent"
                />
                <ChevronDownIcon width={16} />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h4 className="text-[#344054] text-sm font-medium">Last Name*</h4>
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
            <h4 className="text-[#344054] text-sm font-medium">
              Email Address*
            </h4>
            <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
              <input
                placeholder="Email"
                className="w-full outline-none bg-transparent"
              />
              <ChevronDownIcon width={16} />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">
              Phone Number*
            </h4>
            <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
              <input
                placeholder="Phone"
                className="w-full outline-none bg-transparent"
              />
              <ChevronDownIcon width={16} />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-[#344054] text-sm font-medium">
              Number of properties to be Managed*
            </h4>
            <div className="flex items-center justify-between gap-2 bg-white border border-solid border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md p-2 w-full">
              <input
                placeholder="Number of properties"
                className="w-full outline-none bg-transparent"
              />
              <ChevronDownIcon width={16} />
            </div>
          </div>
          <button className="mt-6 bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md">
            Edit
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Account;
