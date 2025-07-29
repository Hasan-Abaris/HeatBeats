

export default function AboutTab() {
    const teamMembers = [
        {
            name: 'Mr. Kalpathi S. Suresh',
            role: 'Executive Director cum Investor',
            education: 'M.Tech IIT Madras, M.S. Clemson University, USA',
            image: '/images/suresh-sir-new.jpg',
            description: `Mr. Kalpathi Suresh started his entrepreneurial journey in the year 1991 by founding SSI and has been
      looking back ever since. His stupendous dedication and success at his work and ideas are an inspiration for
      everyone. His rich career is also dotted with significant milestones like Indiaskills and MeritTrac.`
        },
        {
            name: 'Vineet Chaturvedi',
            role: 'Co-founder & Chief Executive Officer',
            education: 'BTech IIT BHU',
            image: '/images/suresh-sir-new.jpg',
            description: `Vineet has been instrumental in setting up and growing the SLA learner community and making it stand tall
      as an EdTech Organization. A relentless thinker, he has closely involved in every business decision, right from
      Sales & Operations to Marketing and new technology and product initiatives.`
        },
        {
            name: 'Lovleen Bhatia',
            role: 'Co-founder',
            education: 'BTech IIT BHU',
            image: '/images/suresh-sir-new.jpg',
            description: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities,
      driving the mission and company’s work culture. He brings with him 13 years of expertise across functions like
      education consulting, product building, marketing and customer acquisition.`
        },
        {
            name: 'Kapil Tyagi',
            role: 'Co-founder',
            education: 'BTech IIT Bombay',
            image: '/images/suresh-sir-new.jpg',
            description: `Kapil has over 15 years of experience across technologies, product development for mobile and consumer internet,
      and online education domain. He is also a founder of iXiGO.com.`
        },
        {
            name: 'Abhishek Kumar',
            role: 'Associate Vice President: Delivery',
            education: 'BTech, MBA',
            image: '/images/suresh-sir-new.jpg',
            description: `Abhishek has been the one behind developing and implementing learning strategies and programs.`
        },
        {
            name: 'Ranvijay Singh',
            role: 'Head of Engineering',
            education: 'BTech, MTech',
            image: '/images/suresh-sir-new.jpg',
            description: `Ranvijay is a seasoned Tech Leader with a decade of hands-on experience in the tech industry.`
        },
    ];
    const data = [
        {
            id: 34,
            img: "/images/TET.jpg",
        },
        {
            id: 35,
            img: "images/be-today.jpg",
        },
        {
            id: 36,
            img: "/images/yo-success.jpg",
        },
        {
            id: 34,
            img: "/images/TET.jpg",
        },
    ];
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
            <h2 className="text-3xl font-bold text-center mb-6">WELCOME TO SLA</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm">
                <div>
                    <p>
                        There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are
                        not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Our Vision</h3>
                    <p>
                        To become the largest online learning ecosystem for continuing education, in partnership with corporates and
                        academia.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Our Mission</h3>
                    <p>
                        To create an alternate platform for students who wish to continue and complete courses by attending live online
                        classes, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by
                        a 24x7 support system.
                    </p>
                </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-center">MANAGEMENT TEAM</h3>
            <div className="space-y-6">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row bg-white shadow p-4 rounded-lg">
                        <div className="w-full md:w-1/4 flex justify-center items-start mb-4 md:mb-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                width={100}
                                height={100}
                                className="rounded"
                            />
                        </div>
                        <div className="md:w-3/4 md:pl-6">
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="italic text-sm text-gray-600 mb-1">{member.role}</p>
                            <p className="text-sm mb-2"><strong>Education:</strong> {member.education}</p>
                            <p className="text-sm">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-6 md:px-16 md:py-16 bg-gray-300 mt-[20px]">
                <h2 className='text-2lg'>SLA Consultants in news</h2>
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, i) => {
                        return (
                            <div key={i} className="text-center outline-3 outline-offset-2  py-5">
                                <img src={item.img} alt={`Image ${i + 1}`} className="w-full h-auto mb-4" />
                                {/* <span className="text-5xl textBlueDark font-light mb-5 inline-block">0{i + 1}</span>
                                <h5 className="text-xl md:text-2xl font-semibold textBlueDark mb-4">
                                    {item.metric}
                                </h5>
                                <p className="text-sm px-2 py-1 rounded font-medium bgOrange text-white inline">
                                    {item.value}
                                </p> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
