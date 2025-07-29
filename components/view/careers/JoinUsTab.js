import { MailIcon } from "lucide-react";


export default function JoinUsTab() {
    return (
        <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-16">

            <section>
                <h2 className="text-center text-2xl font-bold mb-10">REASONS TO WORK WITH US</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "World class team",
                            content:
                                "At SLA , you get to work with some of the best educators from around the world. Every day, you rub shoulders with former executives from top companies, alumni from IIT, IIM, ISB, and other quality institutions. And, you get the chance to become a world class expert yourself, as you constantly learn from each other.",
                        },
                        {
                            title: "Creativity & Independence",
                            content:
                                "We recognize skill, knowledge and common sense. Not hierarchy. At SLA , we encourage you to take ownership, to make your own decisions. We don’t have nosy managers to tell you what to do. We have leaders who are only too happy to guide you, to nurture you. But, you get to unleash your creativity, to mold the system better.",
                        },
                        {
                            title: "A Collaborative Workplace",
                            content:
                                "We don’t care if you are not wearing formals. We don’t care whether you are a fresher or an old hand. What matter at SLA  are transparency and frankness. Collaboration is key and we make sure everyone is accessible for any sort of discussion.",
                        },
                        {
                            title: "Learning – A Way of Life",
                            content:
                                "We are educators. But, we are also students. At SLA , we believe that learning is an eternal process, one that constantly keeps us young and inquisitive. Any course that we offer online is also available to our employees for free.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">

                                <span className="text-blue-600 text-xl font-bold">📘</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="bg-gray-100 px-6 md:px-20 py-16">
                <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">OPEN POSITIONS</h2>
                <p className="text-center text-sm text-gray-700">
                    Drop us a mail at{" "}
                    <a href="mailto:career@edureka.co" className="text-blue-600 underline">
                        career@edureka.co
                    </a>
                    . We'll be happy to hear from you.
                </p>
                <p className="text-center text-sm text-gray-700 mb-12">
                    Alternatively, choose from our list of openings and apply for the one you’re ready to take head on.
                </p>

                <div className="space-y-12 text-gray-800 max-w-6xl mx-auto">

                    <div>
                        <h3 className="text-lg font-bold mb-4">MARKETING</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p>Internship - Research Analyst</p>
                                <p className="text-sm text-gray-500">Bangalore</p>
                            </div>
                            <div>
                                <p>Associate Performance Marketing</p>
                                <p className="text-sm text-gray-500">Bangalore</p>
                            </div>
                            <div>
                                <p>Associate Research Analyst</p>
                                <p className="text-sm text-gray-500">Bangalore</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div>
                        <h3 className="text-lg font-bold mb-4">SALES</h3>
                        <div>
                            <p>Associate Inside Sales Manager</p>
                            <p className="text-sm text-gray-500">Bangalore</p>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div>
                        <h3 className="text-lg font-bold mb-4">CORPORATE SALES</h3>
                        <div>
                            <p>Enterprise Business Manager</p>
                            <p className="text-sm text-gray-500">Bangalore</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white px-6 md:px-20 py-16 border-t border-gray-200 text-left">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                 
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Sign up for our monthly newsletter and Job openings
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Be the first to know about new open job positions.
                        </p>
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
                            />
                            <button className="bg-blue-800 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-blue-900">
                                SIGN UP
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            FOR CAREER ASSISTANCE
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <MailIcon className="w-5 h-5" />
                            <a href="mailto:career@edureka.co" className="text-blue-600">
                                career@edureka.co
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
