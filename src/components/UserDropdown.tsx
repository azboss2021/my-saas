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

const UserDropdown = ({ image }: { image: string }) => {
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
            className="flex items-center gap-2 p-4 cursor-pointer"
          >
            <FaUser size={14} /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4" asChild>
          <Link
            href="/billing"
            className="flex items-center gap-2 p-4 cursor-pointer"
          >
            <FaCrown size={14} /> Billing
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex items-center gap-2 p-4 cursor-pointer"
        >
          <FaUnlock size={14} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
