import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AccountSettingIcon,
  CalendarIcon,
  CloseIcon,
  CodeSandBoxIcon,
  DashboardIcon,
  FileBookmarkIcon,
  Hamburger,
  ManagerIcon,
  PropertyIcon,
  ScaleIcon,
  UserCircleIcon,
} from "../assets/icons";
import ModalLayout from "./ModalLayout";
import useStore from "../store";

function DashboardLayout({ children }: any) {
  const currentModal = useStore((state: any) => state.currentModal);

  useEffect(() => {
    if (currentModal != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [currentModal]);
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <div className="bg-[#FAFAFA]">
      {/* General Modal */}
      {currentModal && <ModalLayout />}
      <div
        className={`md:flex grow gap-6 p-2 h-screen md:p-6 max-w-[1800px] relative mx-auto ${
          currentModal && "blur-sm"
        }`}
      >
        {/* Nav section */}
        <nav className="w-full grow md:w-[200px] lg:w-[280px] md:fixed z-[100] flex shrink-0 justify-between">
          <div className="w-full flex flex-col">
            <Link to="/" className="text-4xl font-modak text-primary">
              Reeka
            </Link>
            <button className="bg-primary my-5 p-3 rounded-xl text-white text-sm border border-primary shadow-inner shadow-black/20">
              Create Reservation
            </button>
            <ul
              className={`${
                nav ? "block" : "hidden"
              } md:block font-medium w-full`}
            >
              <ListItem
                route="/dashboard"
                Icon={DashboardIcon}
                title="Dashboard"
              />
              <ListItem
                route="/portfolio"
                Icon={CodeSandBoxIcon}
                title="Portfolio Operations"
              />
              <ListItem
                route="/calendar"
                Icon={CalendarIcon}
                title="Calendar"
              />
              <ListItem
                route="/report"
                Icon={PropertyIcon}
                title="Report Center"
              />
              <ListItem
                route="/booking"
                Icon={FileBookmarkIcon}
                title="Booking Management"
              />
              <ListItem
                route="/account"
                Icon={UserCircleIcon}
                title="Account"
              />
              <ListItem
                route="/integration"
                Icon={ScaleIcon}
                title="Integration"
              />
              <ListItem
                route="/personnel"
                Icon={ManagerIcon}
                title="Personnel Management"
              />
              <ListItem route="#" Icon={AccountSettingIcon} title="Settings" />
            </ul>
          </div>

          <span className="md:hidden p-2 cursor-pointer" onClick={toggleNav}>
            {nav ? <CloseIcon width={22} /> : <Hamburger width={22} />}
          </span>
        </nav>

        <main className="bg-white md:ml-[232px] lg:ml-[312px] md:max-w-[calc(100vw-312px)] min-h-screen md:max-h-[100vh-48px] no-scrollbar border shadow-sm shadow-gray-300 rounded-xl grow overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

function ListItem({
  route,
  Icon,
  title,
}: {
  route: string;
  Icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  title: string;
}) {
  const location = useLocation();
  return (
    <li>
      <Link
        to={route}
        className={`flex gap-3 items-center w-full p-2 my-1.5 hover:bg-primary/20 rounded-md no-underline ${
          location.pathname.startsWith(route)
            ? "border-primary border-solid border text-primary"
            : "text-secondary"
        }`}
      >
        <Icon
          width={22}
          color={location.pathname === route ? "#E36B37" : "#6D6D6D"}
        />
        <span>{title}</span>
      </Link>
    </li>
  );
}
