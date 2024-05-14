import { SearchIcon } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('https://imgur.com/1SLU5KN.png')" }}
      className="bg-cover bg-no-repeat bg-center w-full flow-root h-[500px] lg:h-[600px]"
    >
      <div className="container my-24">
        <div className="flex items-center justify-center flex-col text-center space-y-5">
          <div className="space-y-2">
            <h3 className="border border-black px-5 py-2 rounded-full inline-block">
              Let us guide your home!
            </h3>
            <p className="text-lg">
              We have more than 74,00 apartments, place & plot.
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Find Your Perfect Home!
            </h2>
          </div>
          <div className="inline-flex items-center bg-white px-4 rounded overflow-hidden w-96 h-12">
            <input
              type="search"
              placeholder="Enter Name, Keywords"
              className="border-none outline-none w-full h-full"
            />
            <SearchIcon size={20} color="black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
