import React from "react";
import "react-phone-input-2/lib/style.css";
import "./App.css";
import bg  from './images/background.jpg'
import logo from './images/Logo-TL.png'
import SocialMediaIcons from "./Components/SocialMediaIcons";
import { FaFacebookF, FaGlobe, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import Slider from "./Components/Slider";
import Form from "./Components/Form";
function App() {
// <======================================== NOTES START ==============================================>

  // Libraries used :   "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code:
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : 06-MAY-2024 || created by : Abid NK   || module : 1 ||
  // modified date : 05/09/2024 || modified by : Abid NK  || module : 1 ||
  // modified date : 24/09/2024 || modified by : Murthasa Ali ck  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Abid NK ||
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :    ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>

 


  return (
   <div className="text-white h-screen   w-full" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover"}}>
     <div className="   grid grid-cols-12 px-5 overflow-y-auto sm:px-10 md:px-12 lg:px-12 h-full bg-stone-900 bg-opacity-70" >
      <div className="col-span-12 h-full py-2">
        
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col gap-4  text-3xl">
          
          <div className="font-bold w-full flex flex-wrap gap-5 py-2 justify-between items-center">
            <div className="flex justify-center items-end  gap-4">
              <div className="text-xl h-fit w-fit rounded-full text-[50px]  ">
                <img src={logo} alt="" className="h-14 w-auto"/>
              </div>
              <div className="text-md font-sans font-bold  text-white ">TL TECHNOLOGIES</div>
            </div>

          </div>
          <div className="font-bold  w-full  flex   rounded-2xl  flex-wrap justify-between items-end  gap-10 ">
         <div className=" flex gap-3 text-[18px]  items-end h-fit  flex-wrap text-stone-50 text-opacity-50 justify-start  rounded-lg">
           <SocialMediaIcons title={"home"}/>
           <SocialMediaIcons title={"product & services"}/>
           <SocialMediaIcons title={"about us"}/>
           <SocialMediaIcons title={"blogs"}/>
         
           
            </div> 
            <div className="flex gap-4">
              <SocialMediaIcons icon={<FaWhatsapp  className=" text-2xl text-white hover:text-green-500"/>} link={"api.whatsapp.com/send/?phone=919061432814"}/>
              <SocialMediaIcons icon={<FaFacebookF className=" text-2xl text-white hover:text-blue-500"/>} link={"https://www.facebook.com/tltechnologiespvtltd"}/>
              <SocialMediaIcons icon={<FaInstagram className=" text-2xl text-white hover:text-pink-500"/>} link={"https://www.instagram.com/tltechnologiespvtltd/"}/>
              <SocialMediaIcons icon={<FaYoutube className=" text-2xl text-white hover:text-red-500"/>} link={"https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q"}/>
              <SocialMediaIcons icon={<FaPinterest className=" text-2xl text-white hover:text-red-600"/>} link={"https://in.pinterest.com/tltechnologiespvtltd/"}/>
              <SocialMediaIcons icon={<FaLinkedin className=" text-2xl text-white hover:text-blue-600"/>} link={"https://in.pinterest.com/tltechnologiespvtltd/"}/>
            </div>
           
            
          </div>
          <div className="w-full h-fit flex flex-wrap justify-center md:justify-center lg:justify-center gap-5">
            <div
              className="relative md:h-[410px] lg:h-[550px]  h-[400px] w-full max-w-[500px] bg-stone-100 bg-opacity-20 bg-center rounded-3xl bg-no-repeat bg-cover"
             
            >
              <Slider/>
            </div>
            <Form/>
          </div>
          <div className="font-extralight  w-full  flex   rounded-2xl  flex-wrap justify-end items-end  gap-10 ">
         <div className=" bg-stone-50 bg-opacity-80 text-black font-extrabold backdrop-blur-xl p-1 px-3">
            <div className="flex gap-4">
              <div className="text-xs font-sans">Copyright © 2024 <span className="text-red-600 text-[15px] font-bold">TL TECHNOLOGIES</span> All Rights Reserved.</div>
            </div>
           
            </div>
            <div className="  bg-stone-50 bg-opacity-80 text-black backdrop-blur-xl p-1 px-3">
            <div className="flex gap-4">
              <a href="https://unity-swart.vercel.app/"  target="_blank" className="text-sm flex  justify-center font-sans font-extrabold items-center text-blue-700  gap-3 underline">to know more about our services  <FaGlobe className="text-blue-400"/> </a>
            </div>
           
            </div> 
            
           
            
          </div>
        
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
