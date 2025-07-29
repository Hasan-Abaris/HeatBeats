import Link from "next/link";

function Cards({ data ,title }) {
    return (
        <div className="bg-white rounded-xl shadow-md h-full overflow-hidden border border-gray-100 my-3">

            <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-bold p-4 uppercase leading-tight">
                <div className="flex items-center gap-2">

                   {!title  &&   <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold">∞</span> }
                    <span> { title ? data?.title : 'DevOps Certification Training with Gen AI' }</span>
                </div>
            </div>


            <div className="p-4">
                <Link href='courses-detail/param' className="text-sm font-semibold text-gray-800 mb-2">
                    {data?.title}
                </Link>

                <p className="text-xs text-gray-400 mb-2">Reviews</p>


                <div className="flex items-center space-x-2">
                    <div className="flex text-orange-400 text-sm">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold">
                        4.5 <span className="text-gray-400 text-xs">(79900)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;