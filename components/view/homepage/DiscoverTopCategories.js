import Link from "next/link";

const categories = [
    {
        title: "Artificial Intelligence",
        icon: "/images/discoverimage/img1.png",
        color: "text-[#F36C7A]",
    },
    {
        title: "BI and Visualization",
        icon: "/images/discoverimage/img2.png",
        color: "text-[#4D7CFE]",
    },
    {
        title: "Cloud Computing",
        icon: "/images/discoverimage/img3.png",
        color: "text-[#50C878]",
    },
    {
        title: "DevOps",
        icon: "/images/discoverimage/img4.png",
        color: "text-[#B084F5]",
    },
    {
        title: "Data Science",
        icon: "/images/discoverimage/img5.png",
        color: "text-[#00CFFF]",
    },
    {
        title: "Cyber Security",
        icon: "/images/discoverimage/img6.png",
        color: "text-[#FFA726]",
    },
    {
        title: "Programming & Frameworks",
        icon: "/images/discoverimage/img7.png",
        color: "text-[#FF5F9E]",
    },
];
function DiscoverTopCategories() {
    return (
        <div className="w-[1130px] mx-auto">
            <h2 className="text-2xl font-bold my-8">Discover Top Categories</h2>
            <div className="text-center">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
                    {categories.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md w-[146px] h-[140px] flex flex-col justify-center items-center transition hover:shadow-lg"
                        >
                            
                             <Link  href={`/category/param`}>
                              <img src={item.icon} alt={item.title} className="w-8 h-8 mb-2" />
                            <span className={`text-sm font-medium`}>{item.title}</span>
                             </Link>
                           
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <a href="#" className="text-[#005BA4] font-semibold text-sm hover:underline">
                        VIEW MORE &gt;
                    </a>
                </div>
            </div>
        </div>
    );
}
export default DiscoverTopCategories;