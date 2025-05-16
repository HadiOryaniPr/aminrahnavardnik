import React from 'react'
import Icon from '../assets/images/icons/globe-2-svgrepo-com.svg'

const icon = Icon;

export default function OurServises() {
    return (
        <section className='w-full bg-gray-100 h-[100vh] flex flex-col place-items-center'>
            {/* head */}
            <div className='flex flex-col place-items-center mt-20 justify-center place-content-center'>
                <h3 className='text-2xl font-bold'><span className='bg-rose-500 py-1'>خد</span>مات</h3>

                <h1 className='mt-5 text-xl md:text-2xl font-bold'><span className='text-2xl md:text-4xl'>در امین راهنورد نیک </span>چه خدماتی ارائه  میکنیم؟ </h1>
            </div>

            {/* cards */}
            <div className='flex mt-40'>
                {/* card */}
                <div className='flex  rounded-3xl bg-white w-110 h-110 '>
                    <span><img width={40} src={icon} alt="" /></span>
                    <h2>01</h2>
                    <div>
                        <h2></h2>
                        <p></p>
                        <span></span>
                    </div>
                </div>

            </div>

        </section>
    )
}
