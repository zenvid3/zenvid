import React from 'react'
import { VideoCard } from '../cards'
import { fakeArray, fakeArray_2 } from '@/assets/constant'
import { useDiscoverVideos } from '@/hooks/useDiscoverVideos'

export default function HomePage() {
  const {data, loading, error} = useDiscoverVideos()

    console.log("the video info", data)
  return (
    <div className='flex gap-4 flex-wrap md:px-1'>
    {data?.notes?.map((note, i) => (
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
  )
}
