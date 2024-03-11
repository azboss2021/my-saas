"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const PageLoadProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        color={"#3B82F6"}
        height="2px"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};
export default PageLoadProgressBar;
