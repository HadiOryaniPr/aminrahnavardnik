import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isDropdownOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
      isDropdownOpen: false,
    }));
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isMenuOpen, isDropdownOpen } = this.state;

    return (
      <nav className="z-10 p-1 fixed w-full bg-white shadow-xl">
        <div className="flex flex-row-reverse justify-between items-center p-4">
          {/* Logo Section */}
          <div className="flex ml-5 flex-row-reverse items-center gap-5">
            <div>
              <span className="text-3xl text-lime-500 font-extrabold">A</span>
              <span className="text-3xl text-gray-200 font-extrabold">R</span>
              <span className="text-3xl text-rose-500 font-extrabold">N</span>
            </div>
            <img
              src="./../../public/logo amin rahnavard0.svg"
              width={40}
              alt=""
            />
          </div>

          {/* Simple Menu Button for Mobile */}
          <button
            onClick={this.toggleMenu}
            className="text-base sm:hidden bg-green-100 px-3 py-1 rounded-md text-green-700 font-bold"
          >
            Menu
          </button>

          {/* Desktop Menu */}
          <ul className="hidden mr-5 sm:flex flex-row gap-10 font-bold cursor-pointer items-center">
            <li className="hover:text-green-400">صفحه اصلی</li>

            {/* Dropdown for Desktop */}
            <li className="hover:text-green-400 relative group">
              <div className="flex flex-row-reverse items-center gap-1 select-none">
                خدمات <span className="text-xs mt-1">▼</span>
              </div>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-md mt-2 w-48 z-50 text-right opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <li className="px-4 py-2 hover:bg-green-100">حمل و نقل جاده‌ای</li>
                <li className="px-4 py-2 hover:bg-green-100">حمل و نقل ریلی</li>
                <li className="px-4 py-2 hover:bg-green-100">خدمات انبارداری</li>
              </ul>
            </li>

            <li className="hover:text-green-400">نمایندگان</li>
            <li className="hover:text-green-400">درباره ما</li>
            <li className="hover:text-green-400">همکاری با ما</li>
            <li className="hover:text-green-400">تماس با ما</li>
          </ul>
        </div>

        {/* Smooth Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col text-right font-bold px-6 pb-4">
            <li className="py-2 border-b hover:text-green-400">صفحه اصلی</li>

            <li
              className="py-2 border-b hover:text-green-400"
              onClick={this.toggleDropdown}
            >
              <div className="flex flex-row justify-between items-center">
                خدمات <span className="text-xs">▼</span>
              </div>

              {/* Smooth Mobile Dropdown */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isDropdownOpen ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <ul className="bg-gray-50 rounded-md text-sm shadow">
                  <li className="px-4 py-2 hover:bg-green-100"><a className="decoration-0" href="https://github.com">حمل و نقل جاده‌ای</a></li>
                  <li className="px-4 py-2 hover:bg-green-100">حمل و نقل ریلی</li>
                  <li className="px-4 py-2 hover:bg-green-100">خدمات انبارداری</li>
                </ul>
              </div>
            </li>

            <li className="py-2 border-b hover:text-green-400">نمایندگان</li>
            <li className="py-2 border-b hover:text-green-400">درباره ما</li>
            <li className="py-2 border-b hover:text-green-400">همکاری با ما</li>
            <li className="py-2 hover:text-green-400">تماس با ما</li>
          </ul>
        </div>
      </nav>
    );
  }
}
