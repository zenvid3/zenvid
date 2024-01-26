import React from 'react'
import {useTheme} from 'next-themes'
import { Button } from '../ui/button'
import { CharacterAvatar } from "@crossbell/ui";
import { ConnectButton } from "@crossbell/connect-kit";
import { extractCharacterName } from "@crossbell/util-metadata";
import Image from 'next/image';
import Search from './Search';
import Authenticated from './Authenticated';
import Authenticate from './Authenticate';
import Link from 'next/link';
import SearchVids from './Search';

type headerprops  = {
	isShowFull? : boolean
	 toggleSidebar? : any
}
export default function Header({isShowFull, toggleSidebar} : headerprops) {
  const {theme, setTheme} = useTheme()

    
  return (
    <div className='flex justify-between h-[50px] md:h-[60px] items-center px-2 md:px-4 dark:bg-background-light sticky top-0 bg-sky-100 z-10 mx-auto   '>
		 <div className=' gap-2 items-center flex '>
			<div className='dark:bg-gray-800/90 cursor-pointer hidden md:flex hover:bg-gray-400/40 bg-gray-300/60 w-9 h-9 rounded-full  items-center justify-center' onClick={toggleSidebar}>
              {!isShowFull ? (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			  </svg>
			  
			  ) : (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

			  )
			  
			  }
			</div>
			<div className='flex items-center gap-2'>
		 <Link href={`/`}>
		<Image  src={`/img/logo.jpg`}  width={150} height={150} alt='logo' 
  className='w-7 h-7 rounded-full cursor-pointer'
/>	</Link></div>
<p className='text-xs font-semibold text-rose-500'>BETA</p>
		 </div>
	


 {/*} <SearchVids  />*/}
<ConnectButton>
		{(status, { connect, selectCharacters }) => {
			if (status.isConnected) {
				const { character } = status.account;
				const displayName =
					extractCharacterName(character) ?? status.displayAddress;
          const userAddress = status?.displayAddress
 
				return (
				<Authenticated  handle={displayName} address={userAddress} profile={character} />
				);
			} else {
				return  <Authenticate   />
			}
		}}
	</ConnectButton>


    </div>
  )
}
