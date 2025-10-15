function SLABusiness() {
  return (
    <section
      className="enroll-section relative p-4 text-white justify-center my-2"
      style={{
        backgroundImage: `url(/images/gaming-banner.jpg)`, // 🔹 Replace with your own gaming banner
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-[0.7] z-0" />

      {/* Content */}
      <div className="relative z-10 text-left w-[1130px] mx-auto mt-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">HeatBeats Academy for Teams</h1>
        <h5 className="text-lg mb-2">
          Build stronger, smarter, and faster gaming squads.
        </h5>
        <p className="mb-4 text-gray-200">
          Train your players with expert-led online sessions in eSports,
          strategy, teamwork, and game mechanics.
        </p>

        <div className="flex justify-center">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-sm hover:bg-gray-300 transition duration-300 ease-in-out">
            EXPLORE COURSES
          </button>
        </div>
      </div>
    </section>
  );
}

export default SLABusiness;
