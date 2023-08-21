"use client";
import React from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ToastContainer } from "react-toastify";
const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "yt",
  projectId: "6cba155af394b71198cfa5b2a14a4c67",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
});

const Provider = ({ children }: any) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Provider;
