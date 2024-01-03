"use client";

import React from "react";
import {useSidebar} from "@/store/use-sidebar";
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine, ArrowRightFromLine} from "lucide-react";
import {Hint} from "@/components/hint";
import {Skeleton} from "@/components/ui/skeleton";

function Toggle() {
  const {collapsed, onExpand, onCollapse} = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed ? (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button className="h-auto p-2" variant="ghost" onClick={onExpand}>
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      ) : null}
      {!collapsed ? (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">Channels</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              variant="ghost"
              className="h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      ) : null}
    </>
  );
}

export default Toggle;

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 flex items-center w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};