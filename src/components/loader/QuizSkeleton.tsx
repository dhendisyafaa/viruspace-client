import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

export default function QuizSkeleton() {
  return (
    <div className="h-[70vh] flex flex-col gap-10 justify-center items-center">
      <Skeleton className="w-[80vw] h-[40px] rounded-xl" />
      <div className="grid space-y-5 w-[40vw]">
        <Skeleton className="w-full h-[30px] rounded-xl" />
        <Skeleton className="w-full h-[30px] rounded-xl" />
        <Skeleton className="w-full h-[30px] rounded-xl" />
        <Skeleton className="w-full h-[30px] rounded-xl" />
      </div>
    </div>
  );
}
