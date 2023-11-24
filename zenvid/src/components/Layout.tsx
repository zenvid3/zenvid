//@ts-nocheck
import React, {useState} from 'react'
import { Inter } from 'next/font/google'
import Header from './TopNav/Header'
import {
  createReactClient,
  studioProvider,
  LivepeerConfig,
  ThemeConfig,
} from "@livepeer/react";
import { LIVEPEER_KEY } from '@/assets/constant';
import { Sidebar } from '@/sidebar';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/graphql/apolloClient';

const inter = Inter({ subsets: ['latin'] })

type layoutProps = {
  children : React.ReactNode
}

   // LIVEPEER THEME
   const livepeerTheme: ThemeConfig = {
    colors: {
      accent: "#f43f5e",
      containerBorderColor: "#3730a3",
    },
    fonts: {
      display: "Inter",
    },
    radii : {
      containerBorderRadius : "16px"
    }
  };
  //LIVEPEER_CONFIGURATIONS
  const client = createReactClient({
    provider: studioProvider({ apiKey : LIVEPEER_KEY }),
  });
export default function Layout({children}: layoutProps) {
  const [isShowFull, setisShowFull] = useState(false)

    const toggleShowModal = () => {
       setisShowFull(!isShowFull)
    }
  return (
    <html lang="en">
      <LivepeerConfig client={client} theme={livepeerTheme} >
        <ApolloProvider client={apolloClient}>
    <body  className={` ${inter.className} `}>
    <Header isShowFull={isShowFull} toggleSidebar={toggleShowModal} />
    <div className='flex '>
       <Sidebar isShowFull={isShowFull} toggleSidebar={toggleShowModal} />
       <div className='w-full'>
      {children}
      </div>
      </div>
    </body>
    </ApolloProvider>
    </LivepeerConfig>

  </html>
  )
}
