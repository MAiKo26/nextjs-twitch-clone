import Navbar from "@/app/(browse)/_components/navbar/Navbar";
import React from "react";
import Sidebar, {SidebarSkeleton} from "./_components/sidebar/Sidebar";
import Container from "./_components/Container";
import {Suspense} from "react";
function BrowseLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
          <Container>{children}</Container>
        </Suspense>
      </div>
    </>
  );
}

export default BrowseLayout;
