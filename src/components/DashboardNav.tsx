import { ArrowLongLeftIcon, NotificationIcon } from "../assets/icons";

function DashboardNav({ title }: { title: string }) {
  return (
    <div className="w-full border-0 border-solid border-b flex justify-between items-center py-4 px-6">
      <div className="flex items-center gap-5">
        <ArrowLongLeftIcon
          className="w-5 text-secondary cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h3 className="text-lg font-medium text-deepBlue">{title}</h3>
      </div>
      <NotificationIcon className="w-5 h-5 cursor-pointer" />
    </div>
  );
}

export default DashboardNav;
