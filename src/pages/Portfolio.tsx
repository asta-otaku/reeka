import { Calendar, ChevronDownIcon } from "../assets/icons";
import DashboardNav from "../components/DashboardNav";
import edit from "../assets/edit.svg";
import { getDateRange } from "../helpers/getDate";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    propertyName: "Property 1",
    location: "Lagos, Nigeria",
    revenue: "$1,000",
    averageDailyRate: "$100",
    nightsOfOccupancy: "10",
  },
  {
    id: 2,
    propertyName: "Property 2",
    location: "Lagos, Nigeria",
    revenue: "$1,000",
    averageDailyRate: "$100",
    nightsOfOccupancy: "10",
  },
  {
    id: 3,
    propertyName: "Property 3",
    location: "Lagos, Nigeria",
    revenue: "$1,000",
    averageDailyRate: "$100",
    nightsOfOccupancy: "10",
  },
  {
    id: 4,
    propertyName: "Property 4",
    location: "Lagos, Nigeria",
    revenue: "$1,000",
    averageDailyRate: "$100",
    nightsOfOccupancy: "10",
  },
  {
    id: 5,
    propertyName: "Property 5",
    location: "Lagos, Nigeria",
    revenue: "$1,000",
    averageDailyRate: "$100",
    nightsOfOccupancy: "10",
  },
];

function Portfolio() {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Portfolio Operation" />
        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          Portfolio
        </h3>

        <div className="flex flex-col md:flex-row  gap-4 justify-between md:items-center w-full px-6">
          <div className="flex flex-col md:flex-row items-center max-w-lg w-full gap-2 mt-3">
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/portfolio/draft")}
              className="flex gap-2 items-center"
            >
              <span className="text-secondary text-sm font-medium">Drafts</span>
              <span className="bg-[#D9D9D9] w-5 h-5 flex items-center justify-center font-medium text-[10px] rounded-full">
                {"1"}
              </span>
            </button>
            <button
              onClick={() => navigate("/portfolio/add")}
              className="bg-primary px-5 py-2 rounded-xl text-white text-sm border border-primary shadow-inner shadow-black/20"
            >
              Add Property
            </button>
          </div>
        </div>

        <div className="overflow-x-auto px-6 no-scrollbar mt-6">
          <div className="p-1.5 rounded-xl bg-[#FAFAFA]">
            <table className="min-w-full text-left text-xs rounded-t-lg  bg-[#FAFAFA] border-collapse">
              <thead className="text-[#BDBDBD] text-sm">
                <tr className="capitalize">
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    property name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    revenue
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    average daily rate
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    nights of occupancy
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  />
                </tr>
              </thead>
              <tbody className="text-[#828282] bg-white">
                {data?.length > 0
                  ? data.map((item: any, i: number) => (
                      <tr
                        onClick={() =>
                          navigate(`/portfolio/:${item.id}`, { state: item })
                        }
                        key={i}
                        className="text-xs text-[#828282] cursor-pointer"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-deepBlue underline">
                          {item.propertyName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.revenue}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.averageDailyRate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.nightsOfOccupancy}
                        </td>
                        <td
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/portfolio/edit/:${item.id}`, {
                              state: item,
                            });
                          }}
                          className="px-6 py-4 whitespace-nowrap z-20"
                        >
                          <button className="text-primary text-xs font-medium">
                            <img src={edit} alt="edit" />
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Portfolio;
