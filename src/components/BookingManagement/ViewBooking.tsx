import { getColor } from "../../helpers/getColor";
import arrow from "../../assets/arrow-right-01.svg";
import close from "../../assets/xmark.svg";
import flag from "../../assets/flag.svg";
import pin from "../../assets/mappin.svg";
import sent from "../../assets/sent.svg";
import link from "../../assets/link-01.svg";
import send from "../../assets/send.svg";
import share from "../../assets/share.svg";
import useStore from "../../store";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function ViewBooking({
  name,
  status,
}: {
  name: string;
  date: string;
  company: string;
  status: string;
}) {
  const setModal = useStore((state: any) => state.setModal);
  const [step, setStep] = useState(1);
  return (
    <>
      {
        {
          1: (
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-xs md:max-w-xl w-full bg-white rounded-lg flex flex-col items-start py-5 z-[200]"
            >
              <div className="flex justify-between items-center w-full pb-4 border-0 border-b border-solid px-8">
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
                    <h6 className="text-[10px] font-medium capitalize">
                      {status}
                    </h6>
                  </div>
                  <span
                    onClick={() => setModal(null)}
                    className="cursor-pointer"
                  >
                    <img src={close} alt="" />
                  </span>
                </div>
              </div>
              <div className="my-5 px-8 flex justify-between items-center w-full">
                <div className="flex items-stretch gap-2">
                  <div>
                    <h6 className="text-[#3A3A3A] font-bold">24</h6>
                    <p className="text-[#3A3A3A] text-sm font-medium">WED</p>
                  </div>
                  <div className="px-[0.5px] py-5 bg-[#EBEBEB]" />
                  <div>
                    <h6 className="text-[#3A3A3A] font-bold">{name}</h6>
                    <p className="text-[#828282] text-sm font-medium">
                      Guests: 4 Guests
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-white border border-solid border-primary shadow-sm shadow-primary/40 rounded-xl p-2  font-semibold text-primary flex justify-center items-center gap-2">
                    <img src={sent} alt="" />
                    <span>Send Reminder</span>
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="bg-primary border border-solid border-primary shadow-sm shadow-primary/40 font-semibold text-white p-2 rounded-xl flex justify-center items-center gap-2"
                  >
                    <img src={share} alt="" />
                    Share
                  </button>
                </div>
              </div>
              <h3 className="my-3 px-8 text-[#333333] font-medium text-xs">
                Duration
              </h3>
              <div className="px-8 flex justify-between items-center w-full py-3">
                <div>
                  <button className="px-2 py-1 border border-solid border-[#C9C9C9] rounded text-[#9C9B9B] text-[10px] font-bold">
                    Check In
                  </button>
                  <div className="mt-2 flex items-center gap-1 text-[#333333] text-xl font-bold">
                    <h2>01:00</h2>
                    <span className="font-bold text-xs">PM</span>
                  </div>
                  <p className="mt-1">Jan 14 2023</p>
                </div>
                <img src={arrow} alt="" className="w-5" />
                <div>
                  <button className="px-2 py-1 border border-solid border-[#C9C9C9] rounded text-[#9C9B9B] text-[10px] font-bold">
                    Check Out
                  </button>
                  <div className="mt-2 flex items-center gap-1 text-[#333333] text-xl font-bold">
                    <h2>11:00</h2>
                    <span className="font-bold text-xs">AM</span>
                  </div>
                  <p className="mt-1">Jan 24 2023</p>
                </div>
              </div>
              <hr className="w-[90%] mx-auto my-3" />

              <section className="map px-8 flex flex-col w-full gap-3">
                <h6 className="font-medium text-xs text-[#333333]">Property</h6>
                <div className="flex items-center gap-2">
                  <img src={pin} alt="" className="w-8" />
                  <div>
                    <h4 className="text-deepBlue font-medium text-xs">
                      Goodsville's Villa
                    </h4>
                    <p className="text-[10px] text-[#828282]">
                      (585) 201-7043166 Ross StBatavia, New York(NY), 14020
                    </p>
                  </div>
                </div>
                <div>
                  <MapContainer
                    center={[51.505, -0.09]}
                    style={{
                      height: "250px",
                      backgroundColor: "#E36B37",
                    }}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                      <Popup>Location of Goodsville's Villa</Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <hr className="w-full" />
                <h5 className="font-mediun text-xs text-[#333333">
                  Amount Paid
                </h5>
                <h4 className="text-[#219653] font-medium text-xl"></h4>
                <p className="text-[#828282] text-[10px]">$200 Per Night</p>
              </section>
            </div>
          ),
          2: (
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-xs md:max-w-lg w-full bg-white rounded-lg flex flex-col items-center p-5 z-[200]"
            >
              <div className="flex justify-between items-center w-full">
                <img src={flag} alt="" className="cursor-pointer" />
                <span onClick={() => setStep(1)} className="cursor-pointer">
                  <img src={close} alt="" />
                </span>
              </div>
              <h3 className="text-[#0B8D00] text-lg font-semibold">
                Reservation Created
              </h3>
              <p className="text-[#475467] text-sm">
                Share reservation details
              </p>
              <div className="flex flex-col w-full gap-2 mt-4">
                <button className="flex items-center justify-center w-full gap-2 rounded-lg border border-solid p-2 hover:bg-gray-100">
                  <img src={link} alt="" />
                  <span className="text-[#344054] font-semibold">
                    Copy Reservation Link
                  </span>
                </button>
                <button className="flex items-center justify-center w-full gap-2 rounded-lg border border-solid p-2 hover:bg-gray-100">
                  <img src={send} alt="" />
                  <span className="text-[#344054] font-semibold">
                    Send via Whatsapp
                  </span>
                </button>
                <button className="flex items-center justify-center w-full gap-2 rounded-lg border border-solid p-2 hover:bg-gray-100">
                  <img src={send} alt="" />
                  <span className="text-[#344054] font-semibold">
                    Send via email to TomJones99@gmail.com
                  </span>
                </button>
              </div>
            </div>
          ),
        }[step]
      }
    </>
  );
}

export default ViewBooking;
