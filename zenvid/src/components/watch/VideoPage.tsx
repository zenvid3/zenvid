import { IPFS_GATEWAY2 } from '@/assets/constant'
import { GET_VIDEO_BY_ID } from '@/graphql/fragments/getVideoById'
import { useQuery } from '@apollo/client'
import { Player } from '@livepeer/react'
import Image from 'next/image'
import React from 'react'
import RelatedVideos from '../relatedVids/RelatedVideos'
import FullVideoStats from './FullVideoStats'
import { useNoteLikeCount, useIsNoteLiked,  } from '@crossbell/connect-kit'
import ChannelInfo from './ChannelInfo'
import Comments from './Comments'

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
     loading, createdAt
    } : videoPageProps) {

      const [{isLiked}] = useIsNoteLiked({
        noteId : videoId,
        characterId : channelId
      })

      const {data : likeCount} = useNoteLikeCount({
        noteId : videoId,
        characterId : channelId
      })
    
        console.log("likes count", likeCount)
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
        <h1 className=' text-2xl'>{videoTitle}</h1>

         <div>
        <FullVideoStats 
          stats={vidStats}
          tips={totalTips}
          videId={videoId}
          createdAt={createdAt}
          likes={likeCount}
          isLiked={isLiked}
        />
         </div>
         <div>
          <ChannelInfo  channel={channelInfo} />
         </div>
          <div>
             <Comments   />
          </div>
    </div>
    </div>
    <RelatedVideos   />
    </div>
   
    </div>
  )
}
