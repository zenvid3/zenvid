import Image from 'next/image'
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { IPFS_GATEWAY2 } from '@/assets/constant'
import { CharacterAvatar } from "@crossbell/ui";
import moment from 'moment'
import Link from 'next/link';
 type videoCardProps = {
  video? : any
  title ? : string
  cover ? : any
  channel? : any
  channelId? : any
  noteId ? : any
  createdAt? : any
 }
export default function VideoCard({cover, channel, channelId, noteId, createdAt} : videoCardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentDate = new Date();
  const videoCreatedAt = new Date(createdAt);
  const diffInMilliseconds = currentDate - videoCreatedAt;
  const diffInHours = diffInMilliseconds / (60 * 60 * 1000);
  const duration = moment.duration(diffInHours, "hours");
  return (
    <div className={` xs:w-11/12 mx-auto xs:h-80 sm:h-96 md:w-64 md:h-72  rounded-xl gap-2.5  md:mb-1  overflow-hidden flex flex-col grow shrink px-2 md:px-0`}>
        <div className='hover:text-rose-400/90'>
          <Link href={`watch/${channelId}-${noteId}`}>
        <div className=' hover:border border-rose-500 rounded-xl overflow-hidden cursor-pointer'>
        <motion.img
         src={`${IPFS_GATEWAY2}${cover}`} 
         alt='video cover'
         className='w-full h-60 sm:h-72 md:h-44 object-cover rounded-xl '
         whileHover={{
            scale : 1.09,
            transition : {
                duration : 0.5
            }
         }}
        >
  </motion.img>
  </div> 
         <h2 className='text-sm line-clamp-2 my-1'>Introducing: Miss Information, Your Fairy Government Godmother</h2>
         </Link>
         </div>

         <div className='flex items-center gap-3'>
          <CharacterAvatar  size={24}  character={channel}  />

           <div>
            <Link href={`/c/${channelId}`}>
            <h1 className='text-xs font-semibold '>{channel?.handle}</h1>
            </Link>
             
             <p className='text-[9px]'> {duration.humanize().replace("a ", "")} ago</p>
           </div>
         </div>
    </div>
  )
}

