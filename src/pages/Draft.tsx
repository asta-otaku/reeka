import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";
import deleted from "../assets/delete-red.svg";
import { useState } from "react";

const draftList = [
  {
    name: "Draft 1",
    date: "12th July 2021",
  },
  {
    name: "Draft 2",
    date: "13th July 2021",
  },
  {
    name: "Draft 3",
    date: "14th July 2021",
  },
  {
    name: "Draft 4",
    date: "15th July 2021",
  },
  {
    name: "Draft 5",
    date: "16th July 2021",
  },
];

function Draft() {
  const [drafts, setDrafts] = useState(draftList);
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Portfolio Operations" />
        <div className="my-4 px-6">
          <h3 className="text-deepBlue font-medium text-2xl">Drafts</h3>
          <p className="text-xs text-[#6D6D6D]">
            Manage your managers and their account permissions here.
          </p>
        </div>

        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {drafts.map((draft, index) => (
            <DraftCard
              key={index}
              name={draft.name}
              date={draft.date}
              drafts={drafts}
              setDrafts={setDrafts}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Draft;

function DraftCard({
  name,
  date,
  drafts,
  setDrafts,
}: {
  name: string;
  date: string;
  drafts: any;
  setDrafts: any;
}) {
  return (
    <div className="bg-[#FAFAFA] rounded-xl p-1 flex flex-col max-w-lg w-full">
      <div className="flex items-center justify-between w-full px-2">
        <div>
          <h2 className="text-deepBlue font-medium text-sm">{name}</h2>
          <p className="text-[#6D6D6DD6] text-[10px] font-medium">{date}</p>
        </div>
        <img
          onClick={() => {
            const newDrafts = drafts.filter(
              (draft: any) => draft.name !== name
            );
            setDrafts(newDrafts);
          }}
          className="cursor-pointer w-5"
          src={deleted}
          alt="delete"
        />
      </div>

      <div className="rounded-xl bg-white w-full mt-2 flex flex-col gap-2 py-2 px-1">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-[#344054] text-sm font-medium">Property Name*</h4>
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
      </div>
      <div className="w-[90%] mx-auto">
        <button className="mt-6 bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-md w-full">
          Continue
        </button>
      </div>
    </div>
  );
}
