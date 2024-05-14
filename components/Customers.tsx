import Image from "next/image";
import React from "react";

function Customers() {
  const users__card = [
    {
      id: 1,
      pic: "https://imgur.com/rWEp3GX.png",
      name: "Cameron Williamson",
      roel: "Designer",
    },
    {
      id: 2,
      pic: "https://imgur.com/0ccXyYF.png",
      name: "Esther Howard",
      roel: "Marketing",
    },
    {
      id: 3,
      pic: "https://imgur.com/IZsdBQi.png",
      name: "Devon Lane",
      roel: "Developer",
    },
  ];
  return (
    <section className="bg-zinc-100 flow-root">
      <div className="container my-24 space-y-10">
        <h2 className="text-4xl font-semibold">
          What our customers are
          <br />
          saying us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {users__card.map((card) => (
            <div
              key={card.id}
              className="bg-white p-8 space-y-5 shadow-md rounded"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <Image
                    src={card.pic}
                    alt="User Image"
                    fill={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{card.name}</h2>
                  <h4>{card.roel}</h4>
                </div>
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores sunt nulla tempora quos nostrum minima voluptatem sint
                cumque vel corrupti impedit architecto, ab earum perferendis
                illum quas odit praesentium placeat!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
