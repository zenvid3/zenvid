import React from 'react'
import { IPFS_GATEWAY2 } from '@/assets/constant'
import { CharacterAvatar } from "@crossbell/ui";
import moment from 'moment'
import RelatedVideoCrad from '../cards/RelatedVideoCrad';
import { useDiscoverVideos } from '@/hooks/useDiscoverVideos';

export default function RelatedVideos() {
    const {data, loading, error} = useDiscoverVideos()
  return (
    <div className='hidden xl:flex flex-col gap-3 w-[27%]'>
       {data?.notes?.map((note, i) => (
      <RelatedVideoCrad
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
