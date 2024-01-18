'use client';
import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import profit1 from '../../../../../public/images/profit1.jpeg'
import profit2 from '../../../../../public/images/profit2.jpeg'
import profit3 from '../../../../../public/images/profit3.jpeg'

const TradingSwipeCard = () => {
  return (
    <div className="h-56 sm:h-64 pb-10 xl:h-80 2xl:h-96">
        <h1 className='text-4xl text-center pb-10'>Some of My Profits</h1>
      <Carousel>
      <div>
          <Image src={profit1} alt="Profit 1" />
        </div>
        <div>
          <Image src={profit2} alt="Profit 1"  />
        </div>
        <div>
          <Image src={profit3} alt="Profit 1"  />
        </div>
      </Carousel>
    </div>
  )
}

export default TradingSwipeCard