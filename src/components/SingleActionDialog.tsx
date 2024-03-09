import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { FaTimesCircle } from "react-icons/fa";
import { ReactNode } from "react";
import LoadingButton from "./LoadingButton";

const SingleActionDialog = ({
  buttonClassName,
  dialogTitle,
  dialogDescription,
  triggerButtonContent,
  buttonContent,
  buttonAction,
  open,
  onOpenChange,
  loading,
}: {
  buttonClassName: string;
  dialogTitle: string;
  dialogDescription: ReactNode | string;
  triggerButtonContent: ReactNode | string;
  buttonContent: ReactNode | string;
  buttonAction: () => void;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>{triggerButtonContent}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LoadingButton
            loading={loading}
            onClick={buttonAction}
            className="rounded-full font-semibold"
          >
            {buttonContent}
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SingleActionDialog;
