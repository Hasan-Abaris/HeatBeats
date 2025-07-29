import React from "react";

const locationData = [
    {
        city: "BANGALORE",
        address: `SLA\n4th Floor, No. 324, Indiqube ETA,\nDoddanekundi, Outer Ring Road,\nBengaluru, Karnataka - 560048`
    },
    {
        city: "DELHI",
        address: `SLA\n5th Floor, Royal Plaza, 1/28,\nMoti Nagar, New Delhi - 110015`
    },
    {
        city: "HYDERABAD",
        address: `SLA\n1st Floor, Vijay Sai Towers, 1-90,\nKavuri Hills, Madhapur,\nHyderabad - 500033`
    },
    {
        city: "KOLKATA",
        address: `SLA\n3rd & 4th Floor, Arcade Centre Premise No. 31,\nAmbedkar Sarani, Kolkata,\nWest Bengal - 700046`
    },
    {
        city: "MUMBAI",
        address: `SLA\nDuru House, 2nd & 4th Floor, Juhu Tara Road,\nSantacruz (W), Mumbai,\nMaharashtra - 400049`
    },
    {
        city: "PUNE",
        address: `SLA\n6th Floor, P-2 Magarpatta City,\nHadapsar, Pune - 411013`
    },
    {
        city: "GURGAON",
        address: `SLA\n9th Floor, Spaze iTech Park Sector 49,\nGurgaon - 122018`
    },
    {
        city: "NOIDA",
        address: `SLA\nTapasya Corp Heights, Ground Floor,\nSector 126, Noida - 201304`
    },
    {
        city: "CHENNAI",
        address: `SLA\nRMZ Millenia Business Park Phase 2, Campus 4B,\n4th Floor, Unit 1B, M.G.R Road,\nPerungudi, Chennai - 600096`
    },
    {
        city: "WASHINGTON",
        address: `SLA\n1200 G Street, NW, Suite 800-113,\nWashington DC - 20005,\nUnited States of America`
    },
    {
        city: "AUSTIN",
        address: `SLA\n7600 Chevy Chase Drive, Suite 300,\nAustin, Texas - 78752,\nUnited States of America`
    },
    {
        city: "DALLAS",
        address: `SLA\n9330 Lyndon B Johnson Fwy,\nDallas, Texas - 75243,\nUnited States of America`
    },
    {
        city: "NEW YORK",
        address: `SLA\n477 Madison Avenue, 6th Floor,\nNew York, NY 10022,\nUnited States of America`
    },
    {
        city: "SAN ANTONIO",
        address: `SLA\n1100 NW Loop 410 Suite 700,\nSan Antonio, Texas - 78213,\nUnited States of America`
    },
    {
        city: "SEATTLE",
        address: `SLA\n600 Stewart Street, Suite 400,\nWest Seattle, WA 98101,\nUnited States of America`
    },
    {
        city: "CHARLOTTE",
        address: `SLA\n301 McCullough Drive, Suite 510,\nCharlotte, North Carolina - 28262,\nUnited States of America`
    },
    {
        city: "NEWARK",
        address: `SLA\n36-40 Broad Street, Newark,\nNew Jersey - 07104,\nUnited States of America`
    },
    {
        city: "WINSTON-SALEM",
        address: `SLA\n615 St. George Square Court, Suite 300,\nWinston-Salem, NC 27103,\nUnited States of America`
    },
];

function Location() {
    return (
        <>
            <section className="p-6 md:px-16 md:py-16 bg-blue-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center h-full">
                    <div className="text-center md:text-start">
                        <h6 className="font-bold text-base mb-6 underline text-white">
                            Our Locations
                        </h6>
                        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-white">
                            Reach Out to Us Across the Globe
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src="/images/contactus_new.png" alt="Contact Us" className="w-full h-auto max-w-md" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16 px-6 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locationData.map((loc, index) => (
                        <LocationCard key={index} city={loc.city} address={loc.address} />
                    ))}
                </div>
            </section>
        </>
    );
}

function LocationCard({ city, address }) {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg text-center text-sm">
            <img
                src="/images/contnew7.png"
                alt="Location"
                className="mx-auto mb-4 w-10 h-10"
            />
            <h3 className="font-bold text-base mb-2 uppercase">{city}</h3>
            <p className="whitespace-pre-line">{address}</p>
        </div>
    );
}

export default Location;
