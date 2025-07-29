"use client";
import { useState } from "react";
import FormContact from "./FormContact";
import IncentivesSection from "./IncentivesSection";
import FAQSection from "./FAQSection";

function Partners() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section
                className="p-6 md:px-16 md:py-16 bgBlueDark"
                style={{
                    backgroundImage: `url(/images/partner-page-hero-image.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#01333f",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center h-full">
                    <div className="text-center md:text-start">
                        <h1 className="font-bold text-3xl md:text-5xl mb-6 text-white">
                            Become Edureka Reseller Partner
                        </h1>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-yellow-500 text-white font-bold text-base py-2 px-4 rounded mt-6 hover:bg-yellow-700 transition duration-300"
                        >
                            PARTNER WITH US
                        </button>
                        {isModalOpen && (
                            <FormContact setIsModalOpen={setIsModalOpen} />
                        )}
                    </div>
                </div>
            </section>

            <IncentivesSection setIsModalOpen={setIsModalOpen}/>
            <FAQSection/>
           
        </>
    );
}

export default Partners;
