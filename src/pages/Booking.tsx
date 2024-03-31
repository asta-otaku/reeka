import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/BookingManagement/Card";
import CreateReservation from "../components/BookingManagement/CreateReservation";
import searchIcon from "../assets/search.svg";
import { useState } from "react";
import useStore from "../store";

const bookings = [
  {
    name: "John Doe",
    date: "Dec 4 - Dec 6",
    company: "Bookings.com",
    status: "ongoing",
  },
  {
    name: "Jane Doe",
    date: "Dec 4 - Dec 6",
    company: "AirBnB",
    status: "upcoming",
  },
  {
    name: "John Doe",
    date: "Dec 4 - Dec 6",
    company: "Bookings.com",
    status: "done",
  },
  {
    name: "Jane Doe",
    date: "Dec 4 - Dec 6",
    company: "AirBnB",
    status: "canceled",
  },
  {
    name: "John Doe",
    date: "Dec 4 - Dec 6",
    company: "Bookings.com",
    status: "ongoing",
  },
  {
    name: "Jane Doe",
    date: "Dec 4 - Dec 6",
    company: "AirBnB",
    status: "upcoming",
  },
  {
    name: "Jakpan",
    date: "Dec 4 - Dec 6",
    company: "Bookings.com",
    status: "done",
  },
  {
    name: "Jane Doe",
    date: "Dec 4 - Dec 6",
    company: "AirBnB",
    status: "canceled",
  },
];

function Booking() {
  const [search, setSearch] = useState("");
  const setModal = useStore((state: any) => state.setModal);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name.toLowerCase().includes(search.toLowerCase()) ||
      booking.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="Booking Management" />

        <h3 className="text-deepBlue font-medium text-2xl my-4 px-6">
          Bookings
        </h3>

        <div className="flex flex-wrap gap-4 items-center justify-between w-full my-4 px-6">
          <div className="max-w-md w-full flex gap-2 border border-solid border-[#E4E4E4] rounded-xl p-3">
            <img src={searchIcon} className="w-5" />
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search bookings"
              className="outline-none text-secondary text-xs bg-transparent w-full"
            />
          </div>
          <button
            onClick={() => setModal(<CreateReservation />)}
            className="bg-primary px-5 py-2 rounded-xl text-white text-sm border border-primary shadow-inner shadow-black/20"
          >
            Create Reservation
          </button>
        </div>

        <section className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="px-2 flex flex-col border-0 border-r border-solid">
            <div className="py-2 text-white bg-primary rounded-lg text-center font-bold">
              Current
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-xl min-h-[50vh] mt-4 flex flex-col gap-2">
              {filteredBookings.map((booking, index) => {
                if (booking.status === "ongoing") {
                  return (
                    <Card
                      key={index}
                      name={booking.name}
                      date={booking.date}
                      company={booking.company}
                      status={booking.status}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="px-2 flex flex-col border-0 border-r border-solid">
            <div className="py-2 text-white bg-[#56CCF2] rounded-lg text-center font-bold">
              Upcoming
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-xl min-h-[50vh] mt-4 flex flex-col gap-2">
              {filteredBookings.map((booking, index) => {
                if (booking.status === "upcoming") {
                  return (
                    <Card
                      key={index}
                      name={booking.name}
                      date={booking.date}
                      company={booking.company}
                      status={booking.status}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="px-2 flex flex-col border-0 border-r border-solid">
            <div className="py-2 text-white bg-[#219653] rounded-lg text-center font-bold">
              Past
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-xl min-h-[50vh] mt-4 flex flex-col gap-2">
              {filteredBookings.map((booking, index) => {
                if (booking.status === "done") {
                  return (
                    <Card
                      key={index}
                      name={booking.name}
                      date={booking.date}
                      company={booking.company}
                      status={booking.status}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="px-2 flex flex-col border-0 border-r border-solid">
            <div className="py-2 text-white bg-[#EB5757] rounded-lg text-center font-bold">
              Canceled
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-xl min-h-[50vh] mt-4 flex flex-col gap-2">
              {filteredBookings.map((booking, index) => {
                if (booking.status === "canceled") {
                  return (
                    <Card
                      key={index}
                      name={booking.name}
                      date={booking.date}
                      company={booking.company}
                      status={booking.status}
                    />
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Booking;
