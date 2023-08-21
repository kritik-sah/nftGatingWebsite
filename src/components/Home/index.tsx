import React from "react";
import ConnetWallet from "../connectButton";
import GatedContent from "../GatedContent/GatedContent";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen p-4 lg:p-6 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="min-h-[70vh] flex flex-col items-center justify-between text-gray-50 p-4 w-full lg:w-4/6 bg-white-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-white">
        <div className="w-full space-y-2">
          <h1 className="text-2xl font-semibold">NFT GATING WEBSITE</h1>
          <p className="text-base font-medium font-serif">
            Simplified by IT Rebels
          </p>
          <p className="text-sm text-gray-200">
            Next.js, Wagmi, Metamask, EVM Chain (Polygon)
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center my-6">
          <GatedContent />
        </div>
        <div className="w-full">
          <ConnetWallet />
        </div>
      </div>
    </div>
  );
};

export default Home;
