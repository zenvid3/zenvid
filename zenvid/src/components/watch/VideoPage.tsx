import { IPFS_GATEWAY2 } from '@/assets/constant'
import { GET_VIDEO_BY_ID } from '@/graphql/fragments/getVideoById'
import { useQuery } from '@apollo/client'
import { Player } from '@livepeer/react'
import Image from 'next/image'
import React from 'react'
import RelatedVideos from '../relatedVids/RelatedVideos'
import FullVideoStats from './FullVideoStats'


type videoPageProps = {
   videoUri? : any
   videoTitle? : any
   videoCover? : any
   channelId ? : any
   channelInfo ? : any
   createdAt? : any
   videoId ?: any
   totalTips? : any
   Stats ? : any 
   vidStats?: any
   loading? : any
}
export default function VideoPage({
    vidStats,
     videoCover, 
     videoId, videoTitle, 
     videoUri,channelId, channelInfo, 
     totalTips,
     loading
    } : videoPageProps) {
    
        const PosterImage = () => {
            return (
              <Image
                src={`${IPFS_GATEWAY2}${videoCover}`}
                layout="fill"
                objectFit="cover"
                priority
              
               
                
                alt='cover'
              />
            );
          };

  
  return (
    <div>
    <div className='flex gap-2'>
      <div className='w-[95%] xl:w-[73%] xl:mx-1 mx-auto  rounded-3xl '>
         <Player
      title="Agent 327: Operation Barbershop"
      playbackId={videoUri}
      poster={<PosterImage />}
      showPipButton
      objectFit="cover"
      priority
      
    /> 
    <div className='mt-4'>
        <h1 className=' text-xl'>This is the title ofthe video</h1>

         <div>
        <FullVideoStats      />
         </div>
    </div>
    </div>
    <RelatedVideos   />
    </div>
   
    </div>
  )
}
