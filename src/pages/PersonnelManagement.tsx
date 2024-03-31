import { useEffect, useState } from "react";
import { ChevronDownIcon } from "../assets/icons";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";
import deleted from "../assets/delete-02.svg";
import searchIcon from "../assets/search.svg";
import AddPersonnel from "../components/AddPersonnel";

function PersonnelManagement() {
  const tableData = localStorage.getItem("personnelData");
  const [data, setData] = useState(tableData ? JSON.parse(tableData) : []);
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("personnelData", JSON.stringify(data));
  }, [data]);

  const getColor = (role: string) => {
    switch (role) {
      case "Property Manager":
        return "bg-[#FAF5FF] text-[#9B51E0]";
      case "Building and Maintenance":
        return "bg-[#FFFCF2] text-[#F2C94C]";
      case "Administrator":
        return "bg-[#FFEFE8] text-[#E36B37]";
      case "Cleaning":
        return "bg-[#E9FFF2] text-[#219653]";
      case "Associate Manager":
        return "bg-[#F2F7FF] text-[#2F80ED]";
      default:
        return "bg-[#FFFAF0] text-[#FFA15F]";
    }
  };

  return (
    <DashboardLayout>
      {
        {
          1: (
            <div>
              <DashboardNav title="Personnel Management" />

              <div className="flex flex-wrap gap-4 items-center justify-between w-full my-4 px-6">
                <div>
                  <h3 className="text-deepBlue font-medium text-2xl">
                    Personnel
                  </h3>
                  <p className="text-xs text-[#6D6D6D]">
                    Manage your managers and their account permissions here.
                  </p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="bg-primary px-5 py-2 rounded-xl text-white text-sm border border-primary shadow-inner shadow-black/20"
                >
                  Add Manager
                </button>
              </div>

              <div className="flex items-center justify-between max-w-xl w-full px-6 gap-4 my-8">
                <div className="w-full flex gap-2 border border-solid border-[#E4E4E4] rounded-xl p-3">
                  <img src={searchIcon} className="w-5" />
                  <input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search manager"
                    className="outline-none text-secondary text-xs bg-transparent w-full"
                  />
                </div>

                <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 w-fit">
                  <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                    <option>Personnel</option>
                  </select>
                  <ChevronDownIcon width={12} />
                </div>
              </div>

              <div className="overflow-x-auto no-scrollbar px-6">
                <div className="p-1.5 rounded-xl bg-[#FAFAFA]">
                  <table className="min-w-full text-left text-xs rounded-t-lg  bg-[#FAFAFA] border-collapse">
                    <thead className="text-[#BDBDBD] text-sm">
                      <tr className="capitalize">
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          date added
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          role
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          phone no
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        />
                      </tr>
                    </thead>
                    <tbody className="bg-white text-[#828282]">
                      {data?.length > 0
                        ? data
                            .filter(
                              (item: any) =>
                                item.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                item.role
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                item.email
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                item.phone
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                            )
                            .map((item: any, index: number) => (
                              <tr
                                key={index}
                                className="cursor-pointer text-sm"
                              >
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-deepBlue">
                                  {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {item.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`p-1 rounded ${getColor(
                                      item.role
                                    )}`}
                                  >
                                    {item.role}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {item.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {item.phone}
                                </td>
                                <td>
                                  <div className="flex items-center gap-4 py-4">
                                    <button
                                      onClick={() => {
                                        setData(
                                          data.filter(
                                            (_: any, i: number) => i !== index
                                          )
                                        );
                                      }}
                                    >
                                      <img src={deleted} />
                                    </button>
                                    <span>...</span>
                                  </div>
                                </td>
                              </tr>
                            ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ),
          2: <AddPersonnel setStep={setStep} setData={setData} data={data} />,
        }[step]
      }
    </DashboardLayout>
  );
}

export default PersonnelManagement;
