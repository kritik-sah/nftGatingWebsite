import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Provider from "@/components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFT GATING WEBSITE | SIMPLIFIED by IT Rebels",
  description: "NFT GATING WEBSITE | SIMPLIFIED by IT Rebels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
