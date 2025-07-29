
import React from "react";

import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <section className="py-10">
        <div className="px-6 md:px-12">
          <div className="text-center flex flex-col items-center">
            <img
              src={"/images/404.webp"}
              width={500}
              height={400}
              className="transition-transform duration-1000 ease-in-out"
              alt="404-error-img"
            />
            <h2 className="text-4xl font-extrabold uppercase text-gray-900 tracking-wide">
              Oops! Page not found
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Sorry, We can't find the page you're looking.
            </p>
            <Link
              href={"/"}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bgBlueDark text-white shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Custom404;
