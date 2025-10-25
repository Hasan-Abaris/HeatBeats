"use client"
import React, { useState } from "react";

function Terms() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="  flex-col items-center  px-8 ">

      <button
        onClick={openModal}
        className="bg-orange-600 text-white px-4 py-2  hover:bg-blue-700 transition"
      >
        View Terms & Conditions
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full   overflow-auto p-6 relative shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
            >
              ✖
            </button>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>1. Tickets once booked cannot be exchanged or refunded.</p>
              <p>2. An Internet handling fee per ticket may be levied. Please check the total amount before payment.</p>
              <p>3. We recommend that you arrive at least 30 minutes prior at the venue for a seamless entry.</p>
              <p>4. It is mandatory to wear masks at all times and follow social distancing norms.</p>
              <p>5. Please do not purchase tickets if you feel sick.</p>
              <p>6. Unlawful resale of a ticket may lead to seizure or cancellation without refund.</p>
              <p>7. Rights of admission reserved.</p>
              <p>8. Terms are subject to change at the organizer's discretion.</p>
              <p>9. Seating is on a first-come, first-serve basis.</p>
              <p>10. Organizers can take action if anyone misbehaves during the show.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Terms;
