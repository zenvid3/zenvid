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
export default function Header() {
  const {theme, setTheme} = useTheme()

    
  return (
    <div className='flex justify-between  h-[60px] items-center px-6 '>
<Image  src={`/img/logo.jpg`}  width={150} height={150} alt='logo' 
  className='w-10 h-10 rounded-full cursor-pointer'
/>

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
