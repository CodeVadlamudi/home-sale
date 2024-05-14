import React from "react";

function Cites() {
  return (
    <section className="bg-zinc-100 flow-root">
      <div className="container my-24">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">
            Find Properties in These Cities
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="col-span-2 rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/ndJhWu6.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">Delhi</h3>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/8tfE5W4.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">Mumbai</h3>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/KAH8geO.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">Nodia City</h3>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/gHMHo9N.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  Bangalore City
                </h3>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/zuVxt3r.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">Kochi City</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 rounded-md overflow-hidden relative">
            <img
              src="https://imgur.com/L6VLU7E.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bg-gradient-to-b from-black/60 h-full w-full bottom-0">
              <div className="ml-8 mt-8">
                <h5 className="text-white text-lg">2 Properties</h5>
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  Lakshadweep Beach
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cites;
