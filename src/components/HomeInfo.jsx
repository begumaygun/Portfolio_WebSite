import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox=({text,link,btnText})=>(
    <div className="InfoBox">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link}  className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
      <div
        className="w-full max-w-md rounded-xl px-4 py-3 mx-auto text-center"
        style={{
          backgroundColor: '#FFA07A',
          color: '#2F2F2F',
          boxShadow: '8px 8px 0px #e07555'
        }}
      >
        <h1 className="text-base font-semibold mb-1">
          Hi, I am <span className="font-bold">Begüm</span> 👸
        </h1>
        <p className="text-sm">A Computer Engineering Student</p>
      </div>
    ),
    2: (
      <div
        className="w-full max-w-md rounded-xl px-4 py-3 mx-auto text-center"
        style={{
          backgroundColor: '#FFA07A',
          color: '#2F2F2F',
          boxShadow: '8px 8px 0px #e07555'
        }}
      >
        <p className="text-sm sm:text-base font-medium mb-3">
          I'm a computer engineering student who enjoys creating, exploring, and growing through code.
          This website is my personal space to share that journey.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#FFA07A] font-semibold py-1.5 px-3 rounded-lg shadow-md hover:scale-105 transition"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
    3: (
      <div
        className="w-full max-w-md rounded-xl px-4 py-3 mx-auto text-center"
        style={{
          backgroundColor: '#FFA07A',
          color: '#2F2F2F',
          boxShadow: '8px 8px 0px #e07555'
        }}
      >
        <p className="text-sm sm:text-base font-medium mb-3">
          Here are some of the projects I've built with passion, curiosity, and lots of late-night debugging sessions.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#FFA07A] font-semibold py-1.5 px-3 rounded-lg shadow-md hover:scale-105 transition"
        >
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
    4: (
      <div
        className="w-full max-w-md rounded-xl px-4 py-3 mx-auto text-center"
        style={{
          backgroundColor: '#FFA07A',
          color: '#2F2F2F',
          boxShadow: '8px 8px 0px #e07555'
        }}
      >
        <p className="text-sm sm:text-base font-medium mb-3">
          Still learning, always curious. Feel free to reach out — I'm just an email away!
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#FFA07A] font-semibold py-1.5 px-3 rounded-lg shadow-md hover:scale-105 transition"
        >
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
  };
  
  

    
const HomeInfo = ({currentStage}) => {

    return renderContent[currentStage] || null;
  
}

export default HomeInfo