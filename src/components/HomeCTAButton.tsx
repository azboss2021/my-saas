"use client";

import LogoImage from "./LogoImage";
import { signIn } from "next-auth/react";
import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { LOGIN_CALLBACK, SAAS_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HomeCTAButton = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingButton
      loading={loading}
      className={cn(
        "group flex w-fit gap-2 rounded-lg px-24 py-7 text-base font-semibold",
        className,
      )}
      onClick={async () => {
        if (loading) return;
        setLoading(true);

        try {
          await signIn("google", { callbackUrl: LOGIN_CALLBACK });
        } catch (error) {
          console.error(error);
          alert("Something went wrong while logging in. Please try again");
        }
      }}
    >
      {!loading && (
        <span className="transition-transform group-hover:-rotate-12">
          <LogoImage />
        </span>
      )}
      Get {SAAS_NAME}
    </LoadingButton>
  );
};
export default HomeCTAButton;
