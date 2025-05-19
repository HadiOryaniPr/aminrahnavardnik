import React, { Component } from "react";
import videoSrc from "../assets/images/truck2.mp4";
import Flag from '../../public/logo amin rahnavard0.svg';

const flag = Flag

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
          <h1 className="text-white flex flex-row-reverse text-8xl font-bold">
            <span className="md:mr-24  text-9xl text-white font-extrabold">A</span>
            <span className=" text-9xl text-white font-extrabold">R</span>
            <img width={150} src={flag} alt="aminrahnavardnik" />
            <span className=" text-9xl text-white font-extrabold">N</span>
          </h1>
          <h1 className="bg-clip-text text-transparent text-white font-bold tracking-widest mt-5 md:text-3xl mt-3 text-3xl">
            Amin Rahnavard Nik
          </h1>
          <span className="text-white text-xl font-semibold mt-2">smart transportation</span>
          <span className="text-2xl mt-1 text-red-500 font-bold">
           برزگ مقیاس هوشمند
          </span>
        </div>
      </main>
    );
  }
}
