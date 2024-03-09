import Link from "next/link";
import { Button } from "./ui/button";
import { FaChevronLeft } from "react-icons/fa";
import { BACK_BUTTON_GOTO } from "@/lib/constants";

const LeaveButton = () => {
  return (
    <Button asChild className="h-12 w-12 rounded-full" variant="outline">
      <Link href={BACK_BUTTON_GOTO}>
        <FaChevronLeft />
        <span className="sr-only">Go back to dashboard</span>
      </Link>
    </Button>
  );
};
export default LeaveButton;
