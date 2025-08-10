"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

export const BrandScroller = () => {
  return (
    <div className="w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="flex animate-marquee gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsSpotify size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Spotify</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsYoutube size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">YouTube</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsAmazon size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Amazon</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsGoogle size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Google</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <div className="w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="flex animate-marquee-reverse gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsSpotify size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Spotify</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsYoutube size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">YouTube</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsAmazon size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Amazon</p>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <BsGoogle size={24} className="text-white" />
                <p className="text-lg font-semibold text-white opacity-80">Google</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const BrandScrollerContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <BrandScroller />
      <BrandScrollerReverse />
    </div>
  );
};

export default BrandScrollerContent;