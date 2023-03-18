import React from "react";
const Hero = () => {
  return (
    <div
      // bg-[url(${../../../public/bus-hero.svg})]
      className={`relative bg-slate-700 bg-transparent  bg-cover bg-no-repeat bg-center  min-h-screen flex justify-center`}
    >
      {/*fade effect  */}
      <div class="absolute inset-0  bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>

      <div className="container mx-auto  flex flex-col-reverse md:flex-row  items-center justify-center md:justify-between gap-4 my-5">
        <div class="relative md:w-1/2 max-w-xl    md:text-left md:ml-6">
          <h1 class="text-3xl text-center md:text-left md:text-5xl  p-3 font-serif font-bold  grad-text ">
            Let's start journey to beyond.
          </h1>
          <p class="md:mt-4 px-3 text-white text-xl text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing ad ipsam?
          </p>
          <div class="mt-8 w-full flex flex-wrap gap-6   text-center px-3">
            <a
              href="#"
              class="block flex-shrink-0 flex-grow rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#"
              class="block flex-shrink-0 flex-grow rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-1/2  md:block hidden md:mr-6">
          <img
            className="max-w-full h-auto max-h-full block"
            src="../../../public/bus-hero.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
