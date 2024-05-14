import { MoveRightIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Client() {
  return (
    <section className="my-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">
              Why You Should Work With Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              accusantium, soluta magni enim a expedita possimus, quidem amet
              totam optio quos, blanditiis neque consectetur sequi deserunt
              voluptatem nesciunt quis. Id.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h3 className="text-xl font-medium">Buy or Rent Homes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Trusted by Thousands</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <button className="w-1/2 h-12 bg-violet-500 hover:bg-violet-600 duration-200 text-white flex items-center justify-center rounded">
              Learn More <MoveRightIcon className="ml-2" />
            </button>
          </div>

          <div className="relative h-96 w-full rounded overflow-hidden">
            <Image
              src="https://imgur.com/QlcJB5t.png"
              alt=""
              fill={true}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-5 right-5 bg-violet-500 flex items-center justify-center space-x-3 w-52 h-16 rounded-md">
              <div className="w-10 h-10 p-2 bg-violet-600 rounded-full flex items-center justify-center border">
                <UsersIcon size={20} color="white" />
              </div>
              <div className="text-white">
                <h3>Total Clients</h3>
                <h4>200 Lacs</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
