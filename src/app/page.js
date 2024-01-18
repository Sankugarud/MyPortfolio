"use client"
import { useState } from 'react'
import TraderHome from './components/Trading/TraderHome/Page'
import TradingAchivement from './components/Trading/TradingAchivement/Page'
import TradingAbout from './components/Trading/TradingAbout/Page'
import TradingSwipeCard from './components/Trading/TradingSwipeCard/Page'
import TradingContact from './components/Trading/TradingContact/Page'
import Achivements from './components/PortFolio/Achivements/page'
import HomePage from './components/PortFolio/HomePage/Page'
import About from './components/PortFolio/About/page'
import Projects from './components/PortFolio/Projects/page'
import Email from './components/PortFolio/Email/Email'
import Footer from './components/PortFolio/Footer/Page'
import Navbar from './components/PortFolio/Navbar/Navbar'
export default function Home() {
  const [change, setChange] = useState(false)
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar setChange={setChange} change={change}/>
      {change ?  
        <div  className="container mt-24 mx-auto px-12 py-4">
          <TraderHome/>
          <TradingAchivement/>
          <TradingAbout/>
          <TradingSwipeCard/>
          <TradingContact/>
        </div>
        :
        <div  className="container mt-24 mx-auto px-12 py-4">
          <HomePage/>
          <Achivements/>
          <About/>
          <Projects/>
          <Email/>
        </div>
    }
      
      <div className='w-full'>
        <Footer/>
      </div>
    </main>
  )
}
