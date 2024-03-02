"use client";

import LogoImage from "./LogoImage";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "./LoadingButton";

const loginRedirect = "/dashboard";

const HomeCTAButton = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <LoadingButton
      loading={loading}
      className={`flex gap-2 py-7 w-fit px-24 group text-base rounded-lg font-semibold ${className}`}
      onClick={async () => {
        if (loading) return;
        setLoading(true);
        try {
          const response = await signIn("google", { redirect: false });

          if (response && !response.error) {
            router.push(loginRedirect);
          }
        } catch (error) {
          console.error(error);
          alert("Something went wrong while logging in. Please try again");
        }
      }}
    >
      {!loading && (
        <span className="group-hover:-rotate-12 transition-transform">
          <LogoImage />
        </span>
      )}
      Get Saas
    </LoadingButton>
  );
};
export default HomeCTAButton;
