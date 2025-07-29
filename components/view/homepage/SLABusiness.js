function SLABusiness() {
    return (
        <section
            className="enroll-section relative p-4 text-white justify-center my-2"
            style={{
                backgroundImage: `url(/images/home.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            
            <div className="absolute inset-0 bg-black bg-opacity-[0.7] z-0" />

            
            <div className="relative z-10 text-left w-[1130px] mx-auto mt-6 mb-6">
                <h1 className="text-3xl font-bold mb-4">SLA Business</h1>
                <h5 className="text-lg ">No more dull edges in your company. Make your employees into masters.</h5>
                <p className="mb-4">Nurture talent with instructor-led courses on trending technologies</p>
                <div className="flex justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-sm     transition duration-300 ease-in-out">LEARN MORE</button>
                </div>
            </div>
        </section>
    );
}

export default SLABusiness;
