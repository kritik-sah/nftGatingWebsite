"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { readContract } from "@wagmi/core";
import { erc721ABI } from "@wagmi/core";
import { toast } from "react-toastify";

const GatedContent = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [contractAddress, setcontractAddress] = useState<any>(
    "0xdfD12eD3117A81fe883a833aE707C34CAb744A91"
  );
  const [isAllowed, setisAllowed] = useState(false);
  const [tempAddress, setTempAddress] = useState(undefined);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const data = await readContract({
          address: contractAddress,
          abi: erc721ABI,
          functionName: "balanceOf",
          chainId: chain?.id,
          args: [address || "0x0000000000000000000000000000000000000000"],
        });
        if (Number(data) > 0) {
          setisAllowed(true);
        } else {
          setisAllowed(false);
        }
      } catch (error) {
        setisAllowed(false);
        toast.error(
          "Can't find ballance, Check your chain & contract properly!"
        );
      }
    };
    if (address) {
      validateUser();
    }
  }, [address, chain, contractAddress]);

  return (
    <>
      {!address ? (
        <>
          <Image
            src="/images/welcome.gif"
            alt="welcome"
            width="480"
            height="277"
            className="rounded-md"
          />
          <p>Connect your wallet to see👀 hidden content</p>
        </>
      ) : null}
      {address ? (
        !isAllowed ? (
          <>
            <Image
              src="/images/notFound.gif"
              alt="Not found"
              width="480"
              height="277"
              className="rounded-md"
            />
            <p>You dont hold any NFT</p>
          </>
        ) : (
          <>
            <iframe
              // width={560}
              // height={315}
              className="w-full h-[60vh]"
              src="https://www.youtube.com/embed/videoseries?list=PL4Rj_WH6yLgWe7TxankiqkrkVKXIwOP42"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <p>
              The best resourse on internet to learn solidit & web3 development
            </p>
          </>
        )
      ) : null}

      {address ? (
        <div className="my-6 w-full">
          <label
            htmlFor="contractAddress"
            className="w-full block mb-2 text-sm font-medium text-gray-50"
          >
            Test your nft
          </label>
          <div className="flex items-center gap-4 w-full">
            <input
              type="text"
              id="contractAddress"
              onChange={(e: any) => setTempAddress(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ERC-721 contract address eg: 0xdfD12eD3117A81fe883a833aE707C34CAb744A91"
            />
            <button onClick={() => setcontractAddress(tempAddress)}>
              Check
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GatedContent;
