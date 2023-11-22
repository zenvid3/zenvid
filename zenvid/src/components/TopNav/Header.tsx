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

type headerprops  = {
	isShowFull? : boolean
	 toggleSidebar? : any
}
export default function Header({isShowFull, toggleSidebar} : headerprops) {
  const {theme, setTheme} = useTheme()

    
  return (
    <div className='flex justify-between  h-[60px] items-center px-6 dark:bg-black sticky top-0 bg-white/90 z-10 '>
		 <div className='flex gap-3 items-center'>
			<div className='dark:bg-gray-800/90 cursor-pointer hover:bg-gray-700/20 w-9 h-9 rounded-full flex items-center justify-center' onClick={toggleSidebar}>
              {!isShowFull ? (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			  </svg>
			  
			  ) : (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

			  )
			  
			  }
			</div>
		 <Link href={`/`}>
		<Image  src={`/img/logo.jpg`}  width={150} height={150} alt='logo' 
  className='w-10 h-10 rounded-full cursor-pointer'
/>	</Link>
		 </div>
	


  <Search    />
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
