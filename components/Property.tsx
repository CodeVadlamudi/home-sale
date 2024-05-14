import Image from "next/image";
import React from "react";

function Property() {
  const property__cards = [
    {
      id: 1,
      img: "https://imgur.com/0nWv1eL.png",
      title: "Town House",
      property_title: "3 Properties",
    },
    {
      id: 2,
      img: "https://imgur.com/B105Hnj.png",
      title: "Modern Villa",
      property_title: "3 Properties",
    },
    {
      id: 3,
      img: "https://imgur.com/TeLOINQ.png",
      title: "Apartment",
      property_title: "3 Properties",
    },
    {
      id: 4,
      img: "https://imgur.com/3IUBGze.png",
      title: "Single Family",
      property_title: "3 Properties",
    },
    {
      id: 5,
      img: "https://imgur.com/5iYzFCK.png",
      title: "Office",
      property_title: "3 Properties",
    },
  ];
  return (
    <section className="container my-24 space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Explore Our Properties</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          architecto.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {property__cards.map((card) => (
          <div key={card.id} className="relative overflow-hidden rounded-lg">
            <img
              src={card.img}
              alt="Image"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-5 left-5">
              <h3 className="text-lg font-medium">{card.title}</h3>
              <h6>{card.property_title}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Property;
