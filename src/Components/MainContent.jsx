import React, { Component } from "react";
import videoSrc from "../assets/images/truck2.mp4";

export default class MainContent extends Component {
  render() {
    return (
      <main className="relative h-screen w-screen overflow-hidden">
        {/* Video Background - now untouchable */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src={videoSrc}
        />

        {/* Lighter Transparent Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute top-0 left-0 w-full h-full place-self-center text-center flex place-content-center flex-col items-center justify-center">
          <h1 className="text-white text-8xl font-bold">
            <span className=" text-9xl text-lime-400 font-extrabold">A</span>
            <span className=" text-9xl text-white font-extrabold">R</span>
            <span className=" text-9xl text-rose-500 font-extrabold">N</span>
          </h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-white via-50% to-rose-500 text-xl md:text-3xl font-semibold mt-3 text-3xl">
            شرکت حمل نقل هوشمند بزرگ مقیاس امین راهنورد نیک
          </h1>
          <a href="#main" className="hover:opacity-95  transition-all duration-300 ease-in font-bold opacity-75 bg-gradient-to-r from-lime-400 via-white via-50% to-rose-500 text-xl cursor-pointer rounded-4xl py-5 px-20 mt-8">
            درباره ما
          </a>
        </div>
      </main>
    );
  }
}
