import { MoveRightIcon } from "lucide-react";
import React from "react";

function Discover() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://imgur.com/CWbSpmK.png')",
      }}
      className="flow-root bg-cover bg-center"
    >
      <div className="container my-24">
        <div className="text-center text-white space-y-3">
          <h2 className="text-4xl">Discover a place you'll love to live!</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            alias consequuntur, consectetur
            <br className="hidden lg:inline-block" /> eligendi minima eius ab
            nam. Temporibus dolores unde.
          </p>
          <button className="flex items-center justify-center rounded bg-violet-500 w-52 h-12 text-lg mx-auto hover:bg-violet-600 duration-200">
            View Properties <MoveRightIcon size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Discover;
