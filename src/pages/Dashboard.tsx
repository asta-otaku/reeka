import { Calendar, ChevronDownIcon, NotificationIcon } from "../assets/icons";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDate, getDateRange } from "../helpers/getDate";
import greenarrow from "../assets/greenarrow.svg";
import redarrow from "../assets/redarrow.svg";
import { useState } from "react";
import AreaChart from "../charts/Area";
import { useNavigate } from "react-router-dom";

const cartData = [
  {
    title: "Revenue",
    value: "$4000",
    percentage: 24.31,
  },
  {
    title: "Occupancy",
    value: "87%",
    percentage: -4.5,
  },
  {
    title: "Average Daily Rate",
    value: "$128.97",
    percentage: 14.11,
  },
];

const tableData = [
  {
    customer: "Ali Hassan Joho",
    property: "00100, Bellevue, Mombasa Road, Nairobi, Kenya",
    checkin: "122-12-2023",
    checkout: "04-01-2024",
    status: "Checked In",
    revenue: "$1,598",
    source: "Reeka",
  },
  {
    customer: "Kate Actress",
    property: "44 Kenyatta Avenue, Nairobi Kenya",
    checkin: "18-12-2023",
    checkout: "31-12-2023",
    status: "Checked out",
    revenue: "$1,750",
    source: "Reeka",
  },
  {
    customer: "Major Isaac",
    property: "1101 Mungo Park Blvd, Mombassa Kenya",
    checkin: "8-12-2023",
    checkout: "07-01-2024",
    status: "Checked In",
    revenue: "$3,800",
    source: "Reeka",
  },
  {
    customer: "Peace Kenyatta",
    property: "Flat 5C, President Street, Nairobi Kenya  ",
    checkin: "06-12-2023",
    checkout: "08-01-2024",
    status: "Checked In",
    revenue: "$4,261",
    source: "Reeka",
  },
];

function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(0);
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="no-scrollbar">
        <div className="w-full border-0 border-solid border-b flex justify-between items-center py-4 px-6">
          <h3 className="text-lg font-medium text-deepBlue">Dashboard</h3>
          <NotificationIcon className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="py-8 px-4">
          <section>
            <span className="text-[#4F4F4F] text-xs">{getDate()}</span>
            <h3 className="mt-1 text-deepBlue font-medium text-2xl">
              Welcome {"Lulu"}
            </h3>
            <div className="flex flex-col md:flex-row  gap-4 justify-between md:items-center w-full">
              <div className="flex flex-wrap items-center max-w-lg w-full gap-2 mt-3">
                <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 md:w-fit">
                  <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                    <option>All Properties</option>
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
                onClick={() => navigate("/portfolio/add")}
                className="bg-primary px-5 py-2 rounded-xl text-white text-sm border border-primary shadow-inner shadow-black/20"
              >
                Add Property
              </button>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-6 items-stretch md:justify-between w-full my-5">
              {cartData.map((data, i) => (
                <Card
                  key={i}
                  {...data}
                  i={i}
                  selected={selectedCard}
                  setSelected={setSelectedCard}
                />
              ))}
            </div>

            <div className="p-8 border border-solid rounded-xl shadow-sm w-full flex">
              {/* Chart */}
              {selectedCard === 0 ? (
                <AreaChart
                  color="#E36B37"
                  tension={0.4}
                  label="Revenue"
                  values={[105, 620, 500]}
                />
              ) : selectedCard === 1 ? (
                <AreaChart
                  color="#2F80ED"
                  tension={0.4}
                  label="Occupancy"
                  values={[105, 60, 200]}
                />
              ) : (
                <AreaChart
                  color="#27AE60"
                  tension={0.4}
                  label="Average Daily Rate"
                  values={[15, 64, 50]}
                />
              )}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center w-full my-6">
              <h3 className="text-deepBlue font-medium text-2xl">Bookings</h3>
              <div className="flex items-center justify-center gap-2 bg-white border border-solid shadow-sm shadow-gray-400 rounded-md p-2 w-fit">
                <select className="outline-none text-secondary text-xs md:text-sm font-medium appearance-none border-none bg-transparent">
                  <option>All Properties</option>
                </select>
                <ChevronDownIcon width={12} />
              </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
              <div className="p-1.5 rounded-xl bg-[#FAFAFA]">
                <table className="min-w-full text-left text-xs rounded-t-lg  bg-[#FAFAFA] border-collapse">
                  <thead className="text-[#BDBDBD] text-sm">
                    <tr className="capitalize">
                      <th
                        scope="col"
                        className="px-6 py-4 whitespace-nowrap font-bold"
                      >
                        customer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 whitespace-nowrap font-bold"
                      >
                        property
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 whitespace-nowrap font-bold"
                      >
                        check-in
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 whitespace-nowrap font-bold"
                      >
                        check-out
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 whitespace-nowrap font-bold"
                      >
                        status
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
                        source
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-[#828282]">
                    {tableData.map((data, i) => (
                      <tr key={i} className="cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-[#333333] ">
                          {data.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {data.property}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {data.checkin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {data.checkout}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          <span
                            className={`rounded-xl border border-solid ${
                              data.status === "Checked In"
                                ? "bg-[#0B8D00]/10 border-[#0B8D00] px-2 py-1 text-[#0B8D00]"
                                : "bg-[#2F80ED]/10 border-[#2F80ED] p-1 text-[#2F80ED]"
                            } `}
                          >
                            {data.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {data.revenue}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">
                          {data.source}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;

function Card({
  title,
  value,
  percentage,
  i,
  selected,
  setSelected,
}: {
  title: string;
  value: string;
  percentage: number;
  i: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      onClick={() => setSelected(i)}
      className={`p-5 rounded-3xl border-2 border-solid ${
        selected === i ? "border-primary" : "border-[#D9D9D9]"
      } flex flex-col gap-4 min-w-xs grow cursor-pointer`}
    >
      <h4
        className={`font-medium text-sm ${
          selected == i ? "text-primary" : "text-[#4F4F4F]"
        }`}
      >
        {title}
      </h4>
      <h3 className="text-deepBlue font-bold text-2xl">{value}</h3>
      <div className="flex items-center gap-2 text-xs font-medium">
        <p>Compared to last month</p>
        <span
          className={`flex items-center p-1.5 rounded-2xl font-light border ${
            percentage > 0
              ? "border-[#0B8D00] bg-[#0B8D00]/10 text-[#0B8D00]"
              : "border-[#EB5757] bg-[#EB5757]/10 text-[#EB5757]"
          }`}
        >
          <img
            src={percentage > 0 ? greenarrow : redarrow}
            alt=""
            className="w-3 h-3 mr-0.5"
          />
          {Math.abs(percentage).toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
