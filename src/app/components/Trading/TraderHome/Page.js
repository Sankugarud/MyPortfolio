"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
const TraderHome = () => {
  return (
    <div>
         <section className="lg:py-2 px-5">
         <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4  lg:text-3xl lg:leading-normal font-extrabold">
            <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-700 to-blue-300">
             Welcome To My Trading Portfolio!
            </span>
            <br className='py-5'></br>
            <TypeAnimation
              sequence={[
                "Day Trader",
                50,
                "Scalper",
                50,
                "Invester",
                50,
              ]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
              style={{ fontSize: "2rem" }}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Welcome To My PortFolio
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-200 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3"
            >
              <span className="block hover:bg-black bg-gradient-to-r from-purple-500  rounded-full px-5 py-2">
                Ask Doubt
              </span>
            </Link>
            <Link
              href="https://KotakSecurities.ref-r.com/c/i/32531/105030847?r=wa"
              className="inline-block border-2 border-blue-500  w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block border-gray-400 bg-[#121212] hover:bg-gradient-to-r  from-blue-500 rounded-full px-5 py-2">
                Start Trading
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full ml-5 bg-[#252525] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/trader.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
        </div>

         </section>
    </div>
  )
}

export default TraderHome
