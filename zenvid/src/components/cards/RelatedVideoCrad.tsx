import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { IPFS_GATEWAY2 } from '@/assets/constant'

type videoCardProps = {
  video? : any
  title ? : string
  cover ? : any
  channel? : any
  channelId? : any
  noteId ? : any
  createdAt? : any
 }
export default function RelatedVideoCrad({video, title, cover, channel, channelId,noteId, createdAt} : videoCardProps) {

  const [currentTime, setCurrentTime] = useState(new Date());
  const currentDate = new Date();
  const videoCreatedAt = new Date(createdAt);
  const diffInMilliseconds = currentDate - videoCreatedAt;
  const diffInHours = diffInMilliseconds / (60 * 60 * 1000);
  const duration = moment.duration(diffInHours, "hours");
  return (
   <div className='w-full'>
        <div  className='flex  gap-2 '>
          <div
          className='w-44 h-24 600  overflow-hidden hover:border-rose-400 rounded-xl '
          >
            <Link href={`${channelId}-${noteId}`}>
            <motion.div
              className='w-full h-full'
              whileHover={{
                scale : 1.09,
                transition : {
                    duration : 0.5
                }
             }}
            >
             <img
             src={`${IPFS_GATEWAY2}${cover}`}
           width={300}
           height={300}
            alt='cover'
            className='w-full h-full object-cover rounded-xl'
/>
</motion.div>
</Link>
          </div>
            <div className='flex-1 w-44 '>
              <Link href={`${channelId}-${noteId}`}>
              <h1 className='line-clamp-2  mb-3 font-light text-sm '>{title}</h1>
              </Link>
              <Link href={`/c/${channelId}`}>
              <h2 className='text-xs line-clamp-1'>{channel?.handle}</h2></Link>
              <p className='text-xs font-light'>{duration.humanize().replace("a ", "")} ago</p>
            </div>
       
        </div>
    </div>
  )
}
