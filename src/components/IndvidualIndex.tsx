import { useState } from "react";
import AreaChart from "../charts/Area";
import greenarrow from "../assets/greenarrow.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LineChart from "../charts/Line";

function IndvidualIndex({ property }: { property: any }) {
  console.log(property);
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-stretch md:justify-between w-full my-5">
        <Card
          title="Revenue"
          value={property.revenue}
          i={0}
          selected={selected}
          setSelected={setSelected}
        />
        <Card
          title="Occupancy"
          value={"98.1%"}
          i={1}
          selected={selected}
          setSelected={setSelected}
        />
        <Card
          title="Average Daily Rate"
          value={property.averageDailyRate}
          i={2}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="mb-5 flex flex-col md:flex-row justify-between gap-4 w-full">
        <div className="rounded-lg bg-[#FAFAFA] p-4 flex flex-col gap-2 w-full">
          <h4 className="text-[#828282] font-bold text-[10px]">
            Revenue Per Night
          </h4>
          <div className="flex items-center gap-4">
            <h3 className="text-deepBlue font-bold text-xl">{"$100"}</h3>
            <div className="text-[#0B8D00] text-[10px] font-light flex items-center p-1 border border-solid border-[#0B8D00] bg-[#0B8D00]/10 rounded-xl">
              <img src={greenarrow} alt="green arrow" className="w-3 h-3" />
              <span>24.50% </span>
            </div>
          </div>
          <div>
            <AreaChart
              color="#907E73"
              values={[10, 17, 13]}
              label={""}
              tension={0.6}
            />
          </div>
        </div>
        <div className="rounded-lg bg-[#FAFAFA] p-4 flex flex-col gap-2 w-full">
          <h4 className="text-[#828282] font-bold text-[10px]">Occupancy</h4>
          <div className="flex items-center gap-4">
            <h3 className="text-deepBlue font-bold text-xl">{"98.1%"}</h3>
            <div className="text-[#0B8D00] text-[10px] font-light flex items-center p-1 border border-solid border-[#0B8D00] bg-[#0B8D00]/10 rounded-xl">
              <img src={greenarrow} alt="green arrow" className="w-3 h-3" />
              <span>11.50% </span>
            </div>
          </div>
          <div>
            <AreaChart
              color="#907E73"
              values={[10, 17, 13]}
              label={""}
              tension={0.6}
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-[#FAFAFA] p-4 flex flex-col gap-2 w-full">
        <h4 className="text-[#828282] font-bold text-[10px]">
          Average Daily Rate
        </h4>
        <div className="flex items-center gap-4">
          <h3 className="text-deepBlue font-bold text-xl">{"$100"}</h3>
          <div className="text-[#0B8D00] text-[10px] font-light flex items-center p-1 border border-solid border-[#0B8D00] bg-[#0B8D00]/10 rounded-xl">
            <img src={greenarrow} alt="green arrow" className="w-3 h-3" />
            <span>24.50% </span>
          </div>
        </div>
        <div>
          <AreaChart
            color="#907E73"
            values={[10, 17, 13]}
            label={""}
            tension={0.6}
          />
        </div>
      </div>
      <div className="px-6 flex flex-col md:flex-row justify-between gap-4 my-6 w-full">
        <div className="py-4 px-2 flex flex-col gap-2 bg-[#FAFAFA] rounded-xl w-full">
          <h4 className="text-[#828282] font-bold text-[10px]">Location</h4>
          <h3 className="text-deepBlue font-bold text-xl">
            {"24 Canal Street, Manhattan, New York"}
          </h3>
          <div className="rounded-xl w-full bg-white p-1">
            <MapContainer
              center={[51.505, -0.09]}
              style={{
                height: "200px",
                backgroundColor: "#E36B37",
                borderRadius: "12px",
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
        </div>
        <div className="py-4 px-2 flex flex-col gap-2 bg-[#FAFAFA] rounded-xl w-full">
          <h4 className="text-[#828282] font-bold text-[10px]">
            Booking Channels
          </h4>
          <h3 className="text-deepBlue font-bold text-xl">{"4"}</h3>
          <div className="rounded-xl w-full bg-white p-1">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndvidualIndex;

function Card({
  title,
  value,
  i,
  selected,
  setSelected,
}: {
  title: string;
  value: string;
  i: number;
  selected: number;
  setSelected: any;
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
    </div>
  );
}
