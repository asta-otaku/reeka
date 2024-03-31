import arrow from "../../assets/arrow-right-01.svg";
import useStore from "../../store";
import ViewBooking from "./ViewBooking";
import { getColor } from "../../helpers/getColor";

export default function Card({
  name,
  date,
  company,
  status,
}: {
  name: string;
  date: string;
  company: string;
  status: string;
}) {
  const setModal = useStore((state: any) => state.setModal);

  return (
    <div className="bg-white rounded-xl py-4 px-2 w-full flex flex-col gap-6">
      <div className="flex justify-between w-full items-start">
        <div className="flex gap-0.5">
          <div className="bg-white p-1 shadow-sm shadow-gray-100 rounded-xl">
            <div
              style={{ backgroundColor: getColor(status) }}
              className="rounded-xl w-0.5 h-full"
            />
          </div>

          <div>
            <h4 className="text-deepBlue font-medium text-sm">{name}</h4>
            <p className="mt-1 text-[#828282] text-xs font-medium">{date}</p>
          </div>
        </div>
        <h5 className="text-xs text-deepBlue font-medium">{company}</h5>
      </div>
      <div className="flex justify-between items-center w-full">
        <div
          style={{
            backgroundColor: getColor(status) + "50",
            border: `1px solid ${getColor(status)}`,
            color: getColor(status),
          }}
          className="flex items-center p-1.5 rounded-xl gap-1 ml-2"
        >
          <span
            style={{ backgroundColor: getColor(status) }}
            className="w-1 h-1 rounded-full"
          />
          <h6 className="text-[10px] font-medium capitalize">{status}</h6>
        </div>
        <button
          onClick={() =>
            setModal(
              <ViewBooking
                name={name}
                company={company}
                status={status}
                date={date}
              />
            )
          }
          className="flex items-center"
        >
          <span className="text-secondary text-[10px] font-medium">
            View Booking
          </span>
          <img src={arrow} />
        </button>
      </div>
    </div>
  );
}
