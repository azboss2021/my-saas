import { cn } from "@/lib/utils";
import { FaGift } from "react-icons/fa";

const sale = "%50 off";
const firstCount = 100;
const totalCustomers = 80;
const remainingCustomers = firstCount - totalCustomers;

const HomeCTAExtraInfo = () => {
  return (
    <div className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold">
      <FaGift className="animate-pulse text-green-500" />
      <span>
        <span className="text-green-500">{sale}</span> for the first{" "}
        {firstCount} customers! ({remainingCustomers} left)
      </span>
    </div>
  );
};
export default HomeCTAExtraInfo;
