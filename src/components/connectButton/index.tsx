"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnetWallet = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
      <ConnectButton />
    </div>
  );
};

export default ConnetWallet;
