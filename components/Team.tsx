import Image from "next/image";
import React from "react";

function Team() {
  const team__card = [
    {
      id: 1,
      img: "https://imgur.com/rWEp3GX.png",
      name: "John Powell",
      role: "Service Support",
    },
    {
      id: 2,
      img: "https://imgur.com/0ccXyYF.png",
      name: "Esther Howard",
      role: "Marketing",
    },
    {
      id: 3,
      img: "https://imgur.com/IZsdBQi.png",
      name: "Devon Lane",
      role: "Developer",
    },
    {
      id: 4,
      img: "https://imgur.com/DaLTcX1.png",
      name: "Samuel Palmer",
      role: "Designer",
    },
  ];
  return (
    <section className="my-24">
      <div className="container space-y-10">
        <div>
          <h2 className="text-3xl font-semibold">Meet Our Team Of Experts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, ullam.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {team__card.map((card) => (
            <div key={card.id}>
              <div className="relative h-72 w-full rounded-md overflow-hidden">
                <Image
                  src={card.img}
                  alt="Picture"
                  fill={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg md:text-xl">{card.name}</h3>
                <h4>{card.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
