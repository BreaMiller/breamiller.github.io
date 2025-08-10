"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

export const BrandScroller = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <BsSpotify size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <BsYoutube size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <BsAmazon size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6"></span>
            
            <BsGoogle size={20} className="mx-2" />
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
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <BsGoogle size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6">Google</span>
            
            <BsAmazon size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6">Amazon</span>
            
            <BsYoutube size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6">YouTube</span>
            
            <BsSpotify size={20} className="mx-2" />
            <span className="text-sm font-medium opacity-70 mx-6">Spotify</span>
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