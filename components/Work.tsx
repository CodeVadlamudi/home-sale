import { HomeIcon, KeyIcon, UserRoundPlusIcon } from "lucide-react";
import React from "react";

function Work() {
  return (
    <section className="my-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[500px]">
            <div className="bg-blue-200 col-span-2 h-full w-full rounded overflow-hidden">
              <img
                src="https://imgur.com/5wUQPan.png"
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-red-200 col-start-1 h-72 w-full rounded overflow-hidden">
              <img
                src="https://imgur.com/RJPpEhi.png"
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-green-200 col-span-2 row-span-2 h-full w-full rounded overflow-hidden">
              <img
                src="https://imgur.com/AyNoP4g.png"
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold">
                How It works? Find a perfect home!
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aliquam!
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex text-start space-x-5">
                <HomeIcon
                  size={20}
                  color="white"
                  className="bg-violet-500 w-14 h-14 p-3 rounded"
                />
                <div>
                  <h3 className="text-xl font-medium">Find Real Estate</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Dolore, aliquid?
                  </p>
                </div>
              </div>

              <div className="flex text-start space-x-5">
                <UserRoundPlusIcon
                  size={24}
                  color="white"
                  className="bg-violet-500 w-14 h-14 p-3 rounded"
                />
                <div>
                  <h3 className="text-xl font-medium">Meet Realtor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Dolore, aliquid?
                  </p>
                </div>
              </div>

              <div className="flex text-start space-x-5">
                <KeyIcon
                  size={24}
                  color="white"
                  className="bg-violet-500 w-14 h-14 p-3 rounded"
                />
                <div>
                  <h3 className="text-xl font-medium">Take The Keys</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Dolore, aliquid?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
