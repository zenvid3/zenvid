import React from 'react'
import { Inter } from 'next/font/google'
import Header from './TopNav/Header'
import {
  createReactClient,
  studioProvider,
  LivepeerConfig,
  ThemeConfig,
} from "@livepeer/react";
import { LIVEPEER_KEY } from '@/assets/constant';

const inter = Inter({ subsets: ['latin'] })

type layoutProps = {
  children : React.ReactNode
}

   // LIVEPEER THEME
   const livepeerTheme: ThemeConfig = {
    colors: {
      accent: "#3730a3",
      containerBorderColor: "#3730a3",
    },
    fonts: {
      display: "Inter",
    },
  };
  //LIVEPEER_CONFIGURATIONS
  const client = createReactClient({
    provider: studioProvider({ apiKey : LIVEPEER_KEY }),
  });
export default function Layout({children}: layoutProps) {
  return (
    <html lang="en">
      <LivepeerConfig client={client}>
    <body  className={` ${inter.className}`}>
      <Header   />
      {children}
    </body>
    </LivepeerConfig>
  </html>
  )
}
