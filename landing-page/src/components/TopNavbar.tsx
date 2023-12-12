import Link from 'next/link'
import React from 'react'
import {PiTelegramLogo} from 'react-icons/pi'
import {RiTwitterXLine, RiDiscordLine} from 'react-icons/ri'
Image
import logo from '../../public/logo.jpg'
import Image from 'next/image'
export default function TopNavbar() {
  return (
    <div className='border-b bg-black/90 z-20 border-gray-900 flex justify-between items-center py-5 px-3 h-[60px] sticky top-0 max-w-6xl  mx-auto'>
       <Link href={`/`}>
       <div className='flex items-center gap-2'>
         <Image
          width={30}
          height={30}
          alt='logo'
          src={logo}
          className='rounded-full '
         />
       <h1 className='font-semibold'>Zenvid</h1>
       </div>
       </Link>
      
         
          <div className='flex items-center gap-3'>
            <div className='cursor-pointer  w-[30px] h-[30px] flex items-center justify-center rounded-full ring-rose-400 hover:ring-1'>
            <RiTwitterXLine style={{width : "20px", height : "20px "}} />
            </div>
        
          <div className='cursor-pointer  w-[30px] h-[30px] flex items-center justify-center rounded-full ring-rose-400 hover:ring-1'>
          <RiDiscordLine style={{width : "23px", height : "23px"}} />
          </div>
            
             <div className='cursor-pointer  w-[30px] h-[30px] flex items-center justify-center rounded-full ring-rose-400 hover:ring-1'>
             <PiTelegramLogo style={{width : "20px", height : "20px"}} />
             </div>
             
             
          </div>
    </div>
  )
}
