import React from 'react'
import {PiTelegramLogo} from 'react-icons/pi'
import {RiTwitterXLine, RiDiscordLine} from 'react-icons/ri'
export default function Footer() {
  return (
    <div className='flex px-4 justify-between items-center h-16 border-t border-gray-800'>
      <p className='text-sm'>© 2023 Zenvid. All right reserved.</p>
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
