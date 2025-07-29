function CultureTab() {
    const data = [
        {
            title: "Product Team",
            description: "We get to sit at the intersection of technology, business, and design. You will usually find us racking our brains to define the ‘why’, ‘what,’ and ‘when’ of the product that the engineering team will build. And if you don’t we would probably be scribbling whiteboards for the next big idea.",
            image: "/images/ProductAnalytics.jpg",
            align: "left",
        },
        {
            title: "Engineering Team",
            description: "We are the ones who build the product. We are the ones who make it work. We are the ones who make it better. We are the ones who make it faster. We are the ones who make it more reliable. We are the ones who make it more secure.",
            image: "/images/Mktng-team.jpg",
            align: "right",
            name: "Vishnu Anand",
            position: "Content Marketing & Corporate Communications",
        },
        {
            title: "Sales Team",
            description: "Our sales team is a group of highly skilled, motivated, flexible individuals who are trained to learn and unlearn, to morph with the changing environments. Here, we don’t measure success by profits, but by the referrals we get. And, we are pretty successful thanks to our sales team.",
            image: "/images/Sales-team.jpg",
            align: "left",
            name: "Gaurav Nigam",
            position: "V.P. Sales",
        },
        {
            title: "CONTENT TEAM",
            description: "Our Content team performs the crucial role of conceptualizing, designing, and curating course content that learners would love to engage with. They are a skilled, creative, and flexible lot that form the core of the Edureka family. The team strives to create content that captures the interest of learners and leaves a lasting impression..",
            image: "/images/Contentteam1.jpg",
            align: "right",

        },
        {
            title: "Customer Success Team",
            description: "This team of ninjas forms the backbone of our learner experience and are the unofficial brand ambassadors of our unwavering commitment to our learners. They support our learners round the clock, be it solving their technical queries, or acting as motivators who won’t let them give up before they reach their goal.",
            image: "/images/Supportteam.jpg",
            align: "left",
            name: "Abhishek Kumar",
            position: "Customer Success",
        },
        {
            title: "HR Team",
            description: "Our HR team is a small but mighty professional and friendly team that’s completely focused on making Edureka a happy place to work in. This energetic team believes that hiring right is half the job done and is constantly on the lookout for ways to keep the team motivated and engaged..",
            image: "/images/HRFinanceAdmin.jpg",
            align: "right",

        },


    ]

    return <div >
        <div className="w-[1100px] mx-auto mt-3 p-4 ">
            <div>
                <h3 className="text-3xl font-bold m-3"> CULTURE AT SLA </h3>
                <p className="text-lg text-gray-600">At SLA, we respect skill, knowledge and common sense. Not hierarchy. We are a family of fun and ambitious people with a desire to impart education, to stay committed to the core vision of SLA.</p>
            </div>
            {
                data.map((item, index) => {
                    if (item.align === "left") {
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className="flex-1 bg-white text-center">
                                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                    {item.name && <h4>{item.name}</h4>}
                                    {item.position && <p className="text-gray-700">{item.position}</p>}
                                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Open Positions </button>
                                </div>
                                <div className="flex-1 bg-white">
                                    <img src={item.image} alt="Culture" className="w-full  object-cover rounded-lg mb-4" />
                                </div>
                            </div>
                        )
                    } else if (item.align === "right") {
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className="flex-1 bg-white">
                                    <img src={item.image} alt="Culture" className="w-full  object-cover rounded-lg mb-4" />
                                </div>
                                <div className="flex-1 bg-white text-left">
                                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                    {item.name && <h4>{item.name}</h4>}
                                    {item.position && <p className="text-gray-700">{item.position}</p>}
                                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Open Positions </button>
                                </div>
                            </div>
                        )

                    }
                })
            }
        </div>
        <div className="bg-gray-200 p-4 mt-4">
            <div className=" w-[800px] mx-auto ">
                <h2 className="text-4xl font-bold">AWARDS AND RECOGNITION</h2>
                <div className="flex">
                    <div className="mr-4">
                        <div className="text-left">
                            <img src="/images/dl-award.png" alt="Awards" className=" h-auto object-cover rounded-lg mt-4" />
                            <p className="text-gray-700 mt-2">Ranked #1 in Deloitte's Tech Fast 50 India 2014.</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-left">
                            <img src="/images/bt-award.png" alt="Awards" className=" h-auto object-cover rounded-lg mt-4" />
                            <p className="text-gray-700 mt-2">Named as one of the 'Coolest Startups of 2015' by Business Today</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold mt-4 mr-8">Ready to begin your career?</h1>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">APPLY NOW</button>
        </div>

    </div>
}
export default CultureTab