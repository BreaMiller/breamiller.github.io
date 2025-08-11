"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";
import { FaFlickr } from "react-icons/fa";
import { SiAdobe, SiGooglegemini, SiClaude, SiMake, SiN8N, SiRapid, SiElevenlabs } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";

export const BrandScroller = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array(1).fill(10).map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <SiAdobe size={20} className="px-9" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
         
            <SiClaude size={20} className="px-9" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <FaFlickr size={20} className="px-9" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <SiGooglegemini size={20} className="px-9" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

            <VscGithubInverted size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

            <FiFigma size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <BsYoutube size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

            <SiMake size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

             <SiRapid size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

            <SiElevenlabs size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>

            <SiN8N size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>            

          </div>
        ))}
      </div>
    </div>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {Array(1).fill(10).map((_, i) => (
          <div key={i} className="flex items-center mx-8">

            <SiN8N size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>            
            
            <SiElevenlabs size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>           
            
            <SiRapid size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>          
            
            <SiMake size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <BsYoutube size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>        
            
            <FiFigma size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <VscGithubInverted size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <SiGooglegemini size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <FaFlickr size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <SiClaude size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <SiAdobe size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandScrollerContent = () => {
  return (
    <div className="py-4">
      <BrandScroller />
      <BrandScrollerReverse />
    </div>
  );
};

export default BrandScrollerContent;