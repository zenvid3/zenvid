import React from 'react'
import { VideoCard } from '../cards'
import { fakeArray, fakeArray_2 } from '@/assets/constant'

export default function HomePage() {
  return (
    <div className='flex gap-3 flex-wrap'>
    {fakeArray_2.map((item, i) => (
        <VideoCard  key={i} />
    ))}
    </div>
  )
}
