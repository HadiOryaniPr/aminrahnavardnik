import React, { useEffect, useState } from "react";

// Import multiple images for the slider
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/ship.jpg";
import Img3 from "../assets/images/2.jpg";

const images = [Img1, Img2, Img3];

export default function MainAboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main id="main" className="flex mt-20 flex-col-reverse md:flex-row justify-center items-center gap-10 w-full px-4 md:px-20 py-10">
      {/* Text Section */}
      <article className="max-w-full md:max-w-[700px] text-center md:text-right">
        <h4 className="text-2xl mb-4 font-extrabold">
          <span className="bg-rose-500 px-1">در</span> باره شرکت
        </h4>

        {/* Background Text - Only show on medium screens and above */}
        <div className="relative hidden md:block">
          <span className="text-8xl absolute bottom-0 right-14 text-gray-50 z-[-10]">
            ABOUT US
          </span>
        </div>

        <h2 className="text-4xl font-bold">شرکت حمل نقل هوشمند بزرگ مقیاس</h2>
        <h1 className="text-4xl w-fit p-2 text-rose-600 font-black mt-3">امین راهنورد نیک</h1>
        <p className="text-justify font-bold leading-relaxed mt-4">
          ما سفرنامه‌نویسان جاده‌های بی‌پایان هستیم. شرکت حمل‌ونقل هوشمند با بیش از
          100 شعبه فعال در سراسر کشور شبکه‌ای منسجم و گسترده از خدمات لجستیکی ایجاد
          کرده است. اما داستان ما تنها به مرزهای خاکی ختم نمی‌شود. با همکاری
          استراتژیک با برترین شرکت‌های حمل‌ونقل بین‌المللی و کشتیرانی، پنجره‌ای به
          تجارت جهانی گشوده‌ایم. هرچند شرکت ما به‌تازگی تأسیس شده، اما تیم حرفه‌ای
          ما حاصل میراثی گران‌بهاست  پرسنلی با سابقه درخشان 15 تا 30 سال در صنعت
          حمل‌ونقل. این اطمینان را به شما می‌دهیم که محموله‌تان در دستان کاربلدی
          امانت خواهد بود.
        </p>
        <button className="rounded-2xl shadow-2xl cursor-pointer hover:bg-rose-800 transition-all duration-300 ease-in mt-10 bg-rose-600 px-10 py-3 text-white font-bold">معرفی بیشتر</button>
      </article>

      {/* Image Slider Section */}
      <article className="w-full md:mr-20 shadow-2xl max-w-[400px] h-[300px] md:h-[600px] relative overflow-hidden rounded-2xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`z-[-10] absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </article>
    </main>
  );
}
