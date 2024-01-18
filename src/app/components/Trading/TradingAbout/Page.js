'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import AboutTrading from '../../../../../public/images/AboutTrading.png';
import { motion } from "framer-motion";

import 'react-tabs/style/react-tabs.css'; 
const TradingAbout = () => {
  return (
    <div className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div>
          <motion.div
            className='iphone'
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{ type: 'smooth', repeatType: 'mirror', duration: 2, repeat: Infinity }}
          >
            <Image
              src={AboutTrading}
              alt="AboutImg"
              width={400}
              height={400}
              priority
              
              style={{ borderRadius: '50%' }}
            />
          </motion.div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <div className="subpixel-antialiased min-h-44 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">About Trading</h1>
            <TypeAnimation
              sequence={[
                "Trading is about buying and selling things like stocks quickly to make short-term profits. Traders use strategies to predict market movements and need discipline and risk management for success. It's more active than long-term investing..",
                1000,
                "Trading is like a fast-paced game where you buy and sell assets quickly to make money from market ups and downs. Traders use strategies and need to stay disciplined and manage risks to succeed. It's different from investing, which is a longer-term approach.",
                1000,
              ]}
              wrapper="span"
              speed={80}
              style={{ fontSize: '1rem' }}
              repeat={Infinity}
            />
          </div>
          <div>
            <Tabs >
              <TabList className="flex py-4 w-100% justify-between">
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-6 rounded-md'>Day Trader</Tab>
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-5	rounded-md	'>Scalping</Tab>
                <Tab className='bg-gradient-to-r from-purple-500 py-2 px-5 	rounded-md	'>Investing</Tab>

              </TabList>
              <TabPanel>
              Day trading involves buying and selling financial instruments within the same trading day. Day traders aim to capitalize on short-term price fluctuations and typically close out all positions before the market closes.
              </TabPanel>
              <TabPanel>
              A type of day trading where you make lots of small trades to grab tiny profits. Scalpers make quick trades, holding onto positions for just seconds or minutes.
              </TabPanel>
              <TabPanel>
              Buying and holding onto things for a long time to make money over the years.  Investors look at the big picture, focusing on factors like company performance and growth potential for long-term gains.
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="loader-line"></div>
    </div>
  )
}

export default TradingAbout