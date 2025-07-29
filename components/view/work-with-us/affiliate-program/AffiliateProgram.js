"use client";

import FAQSection from "./FAQSection";

function AffiliateProgram() {
    return (
        <>
            <section
                className="p-6 md:px-16 md:py-16 bgBlueDark"
                style={{
                    backgroundImage: `url(/images/affiliate1.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#01333f",
                }}
            >
                <div className="text-center">
                    <h1 className="font-bold text-3xl md:text-5xl mb-6 text-white">
                        Promote courses
                    </h1>
                    <h1 className="font-bold text-3xl md:text-5xl mb-6 text-white">
                        from the most engaging learning platform
                    </h1>
                    <button className="bg-yellow-500 text-white font-bold text-base py-2 px-4 rounded mt-6 hover:bg-yellow-700 transition duration-300">
                        Become Affiliate
                    </button>
                </div>
            </section>

            <section className="py-12 bg-white text-center w-[1100px] mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold mb-12">
                    Why partner with SLA?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16">
                    {[
                        {
                            title: "Easy to Promote",
                            description:
                                "Share SLA content by adding our tracking links and creatives to your site or blog, email newsletters, or in social media promotions!",
                            icon: "📢",
                        },
                        {
                            title: "Generous Commissions",
                            description:
                                "Earn 10% commission on the sale value for valid purchases through your affiliate links and banners.",
                            icon: "💵",
                        },
                        {
                            title: "Marketing Assets",
                            description:
                                "Access course-specific links, creatives, banners, and tools to help you drive sales.",
                            icon: "📈",
                        },
                        {
                            title: "Detailed Analytics",
                            description:
                                "Track commissions, payments, and performance with real-time data.",
                            icon: "📊",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 bg-gray-100 text-center " >
                <h2 className="text-2xl md:text-4xl font-semibold mb-12">
                    How does SLA’s affiliate program work?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 w-[1100px] mx-auto">
                    {[
                        {
                            title: "Join to Start",
                            description:
                                "Join SLA’s affiliate program on LinkShare — it’s fast, easy, and free.",
                            icon: "🔗",
                        },
                        {
                            title: "Easy to Promote",
                            description:
                                "Promote 100+ courses with banners, text links, or your own creatives.",
                            icon: "🎯",
                        },
                        {
                            title: "Publish",
                            description:
                                "Use SLA’s clean banners, links, and creatives on your site.",
                            icon: "📰",
                        },
                        {
                            title: "Make Money",
                            description:
                                "Earn up to 15% commission on valid sales through your affiliate links.",
                            icon: "💰",
                        },
                    ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FAQSection/>
        </>
    );
}

export default AffiliateProgram;
