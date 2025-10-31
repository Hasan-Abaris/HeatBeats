import SeatsPage from "@/components/seats";
import { Suspense } from "react";

export default function Seatpage() {
  return (
    <Suspense fallback={<p className="text-center py-10 text-gray-500">Loading seats...</p>}>
      <SeatsPage />
    </Suspense>
  );
}
