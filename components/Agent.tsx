import React from "react";

function Agent() {
  return (
    <section className="flow-root bg-violet-600">
      <div className="my-24 container flex flex-col md:flex-row items-center justify-between rounded space-y-5 md:space-y-0">
        <div className="text-white space-y-1 text-center">
          <h2 className="text-2xl">Become a Real Estate Agent</h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <button className="bg-white w-96 h-12 text-violet-800 rounded text-lg uppercase shadow-md">
          Sign in or create an account
        </button>
      </div>
    </section>
  );
}

export default Agent;
