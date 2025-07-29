"use client";
import { useRef } from "react";

const fallbackClients = [
  { name: "Google", logo: "/clients/google.jpg" },
  { name: "Amazon", logo: "/clients/amazon.png" },
  { name: "Microsoft", logo: "/clients/microsoft.png" },
  { name: "Apple", logo: "/clients/apple.png" },
  { name: "Facebook", logo: "/clients/facebook.png" },
  { name: "IBM", logo: "/clients/ibm.png" },
  { name: "TCS", logo: "/clients/tcs-logo.png" },
  { name: "Infosys", logo: "/clients/infosys-logo.png" },
  { name: "Wipro", logo: "/clients/wipro.png" },
  { name: "Capgemini", logo: "/clients/capgemini.png" },
  { name: "Deloitte", logo: "/clients/Deloitte.png" },
  { name: "Accenture", logo: "/clients/accenture.png" },
  { name: 'Visa', logo: '/clients/visa.png' }, 
];

export default function OurCorporateClients({ allclients }) {
  const containerRef = useRef(null);

  const scrollBy = (distance) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const clientsToDisplay =
    Array.isArray(allclients) && allclients.length > 0
      ? allclients
      : fallbackClients.map((c) => ({ name: c.name, client_logo: c.logo }));

  return (
    <section className="w-full bg-gray-100 py-10 relative">
      <h2 className="text-center text-2xl font-bold mb-6">
        Our Corporate Clients
      </h2>

      <button
        onClick={() => scrollBy(-300)}
        className="absolute left-4 top-2/6 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={() => scrollBy(300)}
        className="absolute right-4 top-2/6 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>

      <div
        className="overflow-x-auto whitespace-nowrap scrollbar-hide px-10"
        ref={containerRef}
      >
        <div className="flex gap-8 w-max">
          {clientsToDisplay.map((client, i) => (
            <div key={i}>
              <div className="min-w-[150px] h-[80px] bg-white shadow-md rounded-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                <img
                  src={`/${client.client_logo.replace(/^\/+/, "")}`}
                  alt={client.name}
                  className="max-h-12 object-contain px-4"
                />
              </div>
              <h6 className="text-center mt-2">{client.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
