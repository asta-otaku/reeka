import { Calendar as CalenderRender } from "antd";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardNav from "../components/DashboardNav";

// generate 10 random events with different dates and titles in the month of March
const events: {
  date: string;
  title: string[];
}[] = [
  {
    date: "2024-03-01",
    title: ["Event 1", "Event 2"],
  },
  {
    date: "2024-03-02",
    title: ["Event 3"],
  },
  {
    date: "2024-03-03",
    title: ["Event 4", "Event 5"],
  },
  {
    date: "2024-03-04",
    title: ["Event 6"],
  },
  {
    date: "2024-03-05",
    title: ["Event 7", "Event 8"],
  },
  {
    date: "2024-03-06",
    title: ["Event 9"],
  },
  {
    date: "2024-03-07",
    title: ["Event 10", "Event 11"],
  },
  {
    date: "2024-03-08",
    title: ["Event 12"],
  },
  {
    date: "2024-03-09",
    title: ["Event 13", "Event 14"],
  },
  {
    date: "2024-03-10",
    title: ["Event 15"],
  },
];

function Calendar() {
  const randomColors = ["#9B51E0", "#828282", "#2F80ED", "#219653", "#E36B37"];
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Calendar" />
        <h3 className="my-4 text-deepBlue px-6 font-medium text-2xl">
          Calendar
        </h3>

        <div className="px-6 my-5">
          <CalenderRender
            cellRender={(date) => {
              // find the event that matches the date and assign a random color to it from the randomColors array
              const event = events.find(
                (event) => event.date === date.format("YYYY-MM-DD")
              );
              return (
                <div>
                  {event?.title.map((title, index) => {
                    const color =
                      randomColors[
                        Math.floor(Math.random() * randomColors.length)
                      ];
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundColor: color + "50",
                          padding: "5px",
                          border: `1px solid ${color}`,
                          borderRadius: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        <span className="text-deepBlue hidden md:block text-xs">
                          {title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Calendar;
