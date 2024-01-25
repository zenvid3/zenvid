import React from 'react'
import { ConnectButton } from '@crossbell/connect-kit'
import {useTheme} from 'next-themes'
export default function Authenticate() {
    const {theme} = useTheme()
  return (
   <div className={`bg-black text-white px-1 md:px-2 py-1 md:py-1 dark:bg-white dark:text-black rounded-xl font-semibold`}>
    	<ConnectButton >
		{(status, { connect, disconnect }) => (
			<button onClick={status.isConnected ? disconnect : connect} className='text-sm md:text-lg'>
				{!status.isConnected && "Connect"}
			</button>
		)}
	</ConnectButton>
   </div>
  )
}
