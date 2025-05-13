import React, { Component } from "react";
import videoSrc from "../assets/images/0_Trucks_Winter_1920x1080.mp4";

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
            <span className=" text-9xl text-green-500 font-extrabold">A</span>
            <span className=" text-9xl text-white font-extrabold">R</span>
            <span className=" text-9xl text-red-500 font-extrabold">N</span>
          </h1>
          <h1 className="text-gray-200 text-xl md:text-3xl font-semibold mt-3 text-3xl">
            شرکت بزرگ مقیاس امین راهنورد نیک
          </h1>
          <button className="font-medium opacity-75 bg-gradient-to-br from-green-600 from-20% via-slate-50/0 via-50% to-rose-600 to-65% text-white text-xl cursor-pointer rounded-4xl py-5 px-20 mt-8">
            درباره ما
          </button>
        </div>
      </main>
    );
  }
}
