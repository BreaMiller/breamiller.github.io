"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

export const BrandScroller = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array(1).fill(0).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <div className="flex items-center gap-3 mx-12">
              <BsSpotify size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Spotify</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsYoutube size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">YouTube</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsAmazon size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Amazon</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsGoogle size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Google</span>
            </div>
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
        {Array(1).fill(0).map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <div className="flex items-center gap-3 mx-12">
              <BsGoogle size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Google</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsAmazon size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Amazon</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsYoutube size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">YouTube</span>
            </div>
            
            <div className="flex items-center gap-3 mx-12">
              <BsSpotify size={24} className="text-white" />
              <span className="text-lg font-semibold opacity-80 text-white">Spotify</span>
            </div>
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