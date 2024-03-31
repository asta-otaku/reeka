import DashboardLayout from "../layouts/DashboardLayout";
import ReportModal from "../components/ReportModal";
import useStore from "../store";
import arrow from "../assets/arrow-right-01.svg";
import bubble from "../assets/chart-bubble-02.svg";
import chart from "../assets/chart-rose.svg";
import report from "../assets/school-report-card.svg";
import DashboardNav from "../components/DashboardNav";

const reportData = [
  {
    title: "Property",
    subtitle: "Operations Report",
    description: "A report on revenue, occupancy, expenses",
  },
  {
    title: "Portfolio",
    subtitle: "Operations Report",
    description:
      "Shows revenue, occupancy, expenses for all properties on Reeka",
  },
  {
    title: "Occupancy",
    subtitle: "Report",
    description: "Calendar with who is booked for each day / week / month",
  },
];

function Report() {
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Report Center" />

        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          Reports
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch md:justify-between w-full my-5 px-6">
          {reportData.map((data, i) => (
            <Card key={i} {...data} i={i} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Report;

function Card({
  i,
  title,
  subtitle,
  description,
}: {
  i: number;
  title: string;
  subtitle: string;
  description: string;
}) {
  const setModal = useStore((state: any) => state.setModal);
  return (
    <div
      onClick={() => setModal(<ReportModal />)}
      className="flex flex-col p-4 gap-2 rounded-xl border border-solid border-[#0000001A] shadow-md shadow-[#0000001A] min-w-xs grow cursor-pointer"
    >
      <img src={i === 0 ? bubble : i === 1 ? report : chart} className="w-8" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h4 className="text-[#091B38] font-medium">{title}</h4>
          <h4 className="text-[#091B38] font-medium">{subtitle}</h4>
        </div>
        <img src={arrow} className="w-5" />
      </div>
      <p className="text-xs text-[#4F4F4F] w-[90%]">{description}</p>
    </div>
  );
}
