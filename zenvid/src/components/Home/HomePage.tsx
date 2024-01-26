//@ts-nocheck
import React, {useState} from 'react'
import { VideoCard } from '../cards'
import { fakeArray, fakeArray_2, shortTest } from '@/assets/constant'
import { useDiscoverVideos } from '@/hooks/useDiscoverVideos'
import VideoCardSpinner from '../skeletons/VideoCardSpinner'
import Image from 'next/image'
import { installApp, isInstallAvailable} from '@/lib/install'
import Button from '../common/Button'
import Input from '../common/inputs/Input'
import TopSection from '../TopSection/TopSection'
import LatestShorts from '../TopSection/LatestShorts'
import ShortsSkeleton from '../skeletons/ShortSkeleton'
import NoData from '../common/NoData'
  // flex gap-4 flex-wrap md:px-1
import Link from 'next/link'
export default function HomePage() {
  const {data, loading, error} = useDiscoverVideos()
  const [testTruth, settestTruth] = useState(false)
    console.log("the video info", data)

     if(loading){
      return(
        <div className='flex flex-col gap-3 w-full '>
          <ShortsSkeleton  />
    <VideoCardSpinner />
        </div>
    
      )
     }

    
  return (
    <div className='w-full '>
    
     <TopSection  />
   
     {data?.notes?.filter(video => video.metadata?.content?.tags[0] !== "comment").length  < 1 && (
      <div className='border-t border-border-gray'>
  <NoData title='No  Videos Yet' isFullPage={true}  />
  </div>
     )}

    <div className='2xl:grid-cols-6 grid-col-1 xl:grid-cols-4 sm:grid-cols-3 grid gap-x-4 gap-y-2 sm:gap-y-6 px-1 md:px-2'>
     
    {data?.notes?.length > 1 && data?.notes?.filter(video => video.metadata?.content?.tags[0] !== "comment").map((note, i) => (
      <VideoCard 
      key={i} 
      video={note} 
      title={note?.metadata?.content?.title}
       cover={note?.metadata?.content?.attachments[0]?.name}
       channel={note?.character}
       channelId={note?.characterId}
       noteId={note.noteId}
       createdAt={note?.createdAt}
      />
      
    ))}

   
   
    </div>
    </div>
  )
}
