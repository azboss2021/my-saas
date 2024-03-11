"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaCrown, FaHome, FaUnlock, FaUser } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const UserDropdown = ({ image }: { image: string }) => {
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={!!!image} className="select-none">
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
            href="/dashboard"
            className="flex cursor-pointer items-center gap-2 p-4 font-semibold"
          >
            <FaHome size={14} /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4" asChild>
          <Link
            href="/account"
            className="flex cursor-pointer items-center gap-2 p-4 font-semibold"
          >
            <FaUser size={14} /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4" asChild>
          <Link
            href="/plan"
            className="flex cursor-pointer items-center gap-2 p-4 font-semibold"
          >
            <FaCrown size={14} /> Plan
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 p-4 font-semibold"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? (
            <>
              <FaMoon size={14} /> Dark Theme
            </>
          ) : (
            <>
              <FaSun size={14} /> Light Theme
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            setLoading(true);
            await signOut({ callbackUrl: "/" });
          }}
          className="flex cursor-pointer items-center gap-2 p-4 font-semibold"
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
