"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaCrown, FaUnlock, FaUser } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const UserDropdown = ({ image }: { image: string }) => {
  const [loading, setLoading] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={!!!image}>
        {image ? (
          <Image
            src={image}
            width={40}
            height={40}
            alt="profile image button"
            className="rounded-full"
          />
        ) : (
          <Button>User</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem className="p-4" asChild>
          <Link
            href="/account"
            className="flex cursor-pointer items-center gap-2 p-4"
          >
            <FaUser size={14} /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4" asChild>
          <Link
            href="/billing"
            className="flex cursor-pointer items-center gap-2 p-4"
          >
            <FaCrown size={14} /> Billing
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            setLoading(true);
            await signOut({ callbackUrl: "/" });
          }}
          className="flex cursor-pointer items-center gap-2 p-4"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" size={14} />
          ) : (
            <FaUnlock size={14} />
          )}
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
