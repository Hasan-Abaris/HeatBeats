const Count = () => {
  return (
    <section className="mt-16 mb-16 text-gray-900 py-12 md:px-6" style={{
      backgroundImage: `url("/assets/bg-graph.png")`,

    }}>
      <div className="max-w-screen-xl mx-auto px-6 text-center w-full">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { value: "50+", label: "PROJECTS COMPLETED" },
            { value: "100%", label: "CLIENT SATISFACTION", badge: "RELIABLE" },
            { value: "LATEST", label: "TECHNOLOGIES USED", dark: true },
            { value: "115+", label: "HAPPY CLIENTS" },
            { value: "11+", label: "COUNTRIES" },
            { value: "50+", label: "POSITIVE REVIEWS", dark: true },
          ].map(({ value, label, badge, dark }, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl text-left relative ${dark ? "bg-white text-black" : "bgBlueLite text-white"
                }`}
            >
              <h3 className="text-3xl font-bold">{value}</h3>
              <p className="tracking-wide">{label}</p>
              {badge && (
                <span className="absolute top-2 right-2 bgOrange text-white text-xs px-2 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Count;
