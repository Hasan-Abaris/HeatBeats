import CorporateTrainingFeatures from "./CorporateTrainingFeatures";
import Curriculums from "./Curriculums";
import FormSection from "./FormSection";
import TrainingNeeds from "./TrainingNeeds";
import TrustedBy from "./TrustedBy";

function CorporateTraining() {
    return (
        <>
            <section
                className="p-6 md:px-16 md:py-16 bgBlueDark"
                style={{
                    backgroundImage: `url(/images/corporate.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#01333f",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center h-full">
                    <div className="text-center md:text-start">
                        <h6 className=" font-bold text-base mb-6 underline text-white">
                            Corporate Training
                        </h6>
                        <h1 className=" font-bold text-3xl md:text-5xl mb-6  text-white">
                            Workplace Learning that Works
                        </h1>
                        <h2 className="text-white">Skill your workforce in new age technologies with our cutting edge curriculum</h2>
                        <button className="bgBlueDark text-white font-bold text-base py-2 px-4 rounded mt-6 hover:bg-blue-700 transition duration-300">
                            Contact with us </button>
                    </div>
                </div>
            </section>

            <TrustedBy />
            <TrainingNeeds />
            <Curriculums />
            <CorporateTrainingFeatures />
            <FormSection />
        </>
    );
}
export default CorporateTraining;