export default function CarouselWrapper({ children }) {
  return (
    <div className="relative flex items-center">
      <button className="absolute -left-5 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold">&lt;</span>
      </button>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {children}
      </div>
      <button className="absolute -right-5 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold">&gt;</span>
      </button>
    </div>
  );
}
