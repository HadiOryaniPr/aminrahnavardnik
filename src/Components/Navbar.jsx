import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <>
        <navbar className="flex place-items-center flex-row-reverse justify-around p-2 shadow-xl">
          <div>
            <ul className="flex transition-all ease-in delay-1000 cursor-pointer flex-row-reverse gap-10 font-bold ">
              <li className="hover:text-green-400">صفحه اصلی</li> 
              <li className="hover:text-green-400">خدمات</li>
              <li className="hover:text-green-400">نمایندگان</li>
              <li className="hover:text-green-400">درباره ما</li>
              <li className="hover:text-green-400">همکاری با ما</li>
              <li className="hover:text-green-400">تماس با ما</li>
            </ul>
          </div>
          <div className="flex flex-row-reverse justify-center place-items-center gap-5">
            <div>
              <span className="text-4xl text-green-500 font-extrabold">A</span>
              <span className="text-4xl text-gray-200 font-extrabold">R</span>
              <span className="text-4xl text-red-500 font-extrabold">N</span>
            </div>
            <img
              src="./../../public/logo amin rahnavard0.svg"
              width={70}
              alt=""
            />
          </div>
        </navbar>
      </>
    );
  }
}
