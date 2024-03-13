"use client";

import { DatabaseUser } from "@/lib/types";
import { dateToShortDate } from "@/lib/utils";
import SingleActionDialog from "./SingleActionDialog";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const AccountInformation = ({ user }: { user: DatabaseUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {};

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold">Account Information</h2>
      <div className="flex flex-col gap-1">
        <span>
          <span className="font-bold">Name: </span>
          {user.name}
        </span>
        <span>
          <span className="font-bold">Email: </span> {user.email}
        </span>
        <span>
          <span className="font-bold">Date Created: </span>{" "}
          {dateToShortDate(new Date(user.createdAt))}
        </span>
        <SingleActionDialog
          buttonClassName="w-fit rounded-full font-semibold"
          dialogTitle="Delete Account"
          dialogDescription="This is a permanent action. This means you will lose ALL information related to your account."
          triggerButtonContent={
            <>
              Delete Account <FaTrash className="ml-2" />
            </>
          }
          buttonContent="Delete Account"
          buttonAction={handleDelete}
          open={isOpen}
          onOpenChange={setIsOpen}
          loading={loading}
          buttonVariant="destructive"
        />
      </div>
    </section>
  );
};
export default AccountInformation;
