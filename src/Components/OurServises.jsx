import React from "react";
import Icon from "../assets/images/icons/globe-2-svgrepo-com.svg";

const cardData = [
  {
    id: 2,
    title: "حمل نقل بین المللی",
    description:
      "حلقه اتصال بازارها با لجستیک هوشمند تانکری و کامیون های حمل کالا از جاده های بین المللی تا کشتی های اقیانوس پیما قرار داد های استراتژیک و شبکه نمایندگان جهاتی",
    extra: "بیشتر",
    icon: Icon,
  },
  {
    id: 1,
    title: "خدمات گمرکی",
    description:
      "ترخیص کالا ها و مواد نفتی شما با کمترین توقف در گمرک تخصص ما در مدیریت پروسه های گمرکی محموله های حجیم و ویژه همراه با تضمین امنیت مدارک و کاهش هزینه های اضفی است",
    extra: "بیشتر",
    icon: Icon,
  },
  {
    id: 4,
    title: "حمل نقل داخلی",
    description:
      "حمل نقل کالا و مواد نفتی و پتروشیمی با بالا ترین استاندارد های ایمنی از بارگیری تا تخله تحت نظارت دقیق و با رعایت تمام پروتکل های زیست محیطی",
    extra: "بیشتر",
    icon: Icon,
  },
  {
    id: 3,
    title: "خدمات فورواردی",
    description:
      "به عنوان فورواردی تخصصی در حوزه کالا و مواد نفتی مدیریت کامل زنجیره لجستیک شما را از بارگیری تا تحویل نهایی بر عهده میگیریم با شبکه گسترده همکاران داخلی و بین المللی",
    extra: "بیشتر",
    icon: Icon,
  },
];

export default function OurServises() {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-start py-20">
      {/* Head */}
      <div className="text-center mb-16">
        <h3 className="text-2xl font-bold">
          <span className="bg-rose-500 py-1 px-2 text-black rounded">خد</span>
          مات
        </h3>
        <h1 className="mt-5 text-xl md:text-2xl font-bold">
          <span className="text-2xl md:text-4xl">در امین راهنورد نیک </span>
          چه خدماتی ارائه میکنیم؟
        </h1>
      </div>

      {/* Container for lines + grid */}
      <div className="relative w-full max-w-6xl px-4">
        {/* Vertical dotted line (center) */}
        <div className="hidden md:block absolute top-0 left-1/2 h-full border-r-2 border-dotted border-gray-300 transform -translate-x-1/2 z-0" />

        {/* Horizontal dotted line (center) */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 border-t-2 border-dotted border-gray-300 transform -translate-y-1/2 z-0" />

        {/* Grid of cards */}
        <div className="cursor-pointer  transition-all duration-300 ease-in grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center relative z-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col hover:text-white items-center rounded-3xl bg-white w-full max-w-[300px] h-[300px] p-6 shadow-lg transform transition-transform duration-300 ease-in-out  hover:scale-110  hover:shadow-2xl cursor-pointer"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between w-full mb-4">
                <img className="opacity-20" width={50} src={card.icon} alt="" />
                <h2 className="text-5xl text-gray-300 font-semibold">{`0${card.id}`}</h2>
              </div>

              {/* Bottom Content */}
              <div className="text-center flex flex-col gap-5">
                <h2 className="text-lg bg-red-500 text-black rounded-xl py-1 px-2 font-medium">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600">{card.description}</p>
                <span className="text-xs text-gray-400">{card.extra}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
