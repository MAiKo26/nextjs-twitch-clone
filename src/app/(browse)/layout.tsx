import Navbar from "@/app/(browse)/_components/Navbar";
import React from "react";

function BrowseLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
}

export default BrowseLayout;
