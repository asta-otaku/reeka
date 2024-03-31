import { Calendar } from "antd";

function IndividualCalendar({ property }: { property: any }) {
  console.log(property);
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default IndividualCalendar;
