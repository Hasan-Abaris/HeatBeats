import React, { Suspense } from "react";
import ReviewPage from "@/components/review";

export default function Review() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ReviewPage />
    </Suspense>
  );
}
