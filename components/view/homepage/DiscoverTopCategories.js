import Link from "next/link";

const categories = [
  {
    title: "PUBG Strategy Mastery",
    icon: "/images/courses/pubg.jpg",
    color: "text-[#F36C7A]",
  },
  {
    title: "Chess for Beginners",
    icon: "/images/courses/chess.jpg",
    color: "text-[#4D7CFE]",
  },
  {
    title: "Ludo Tactics and Tricks",
    icon: "/images/courses/ludo.jpg",
    color: "text-[#50C878]",
  },
  {
    title: "Free Fire Pro Course",
    icon: "/images/courses/freefire.jpg",
    color: "text-[#B084F5]",
  },
  {
    title: "Valorant Competitive Skills",
    icon: "/images/courses/valorant.jpg",
    color: "text-[#00CFFF]",
  },
  {
    title: "Carrom Masterclass",
    icon: "/images/courses/carrom.jpg",
    color: "text-[#FFA726]",
  },
  {
    title: "Snooker & Pool Training",
    icon: "/images/courses/snooker.jpg",
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