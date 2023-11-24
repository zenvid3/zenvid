import React from 'react'
import ChannelBanner from './ChannelBanner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function ChannelPage() {
  return (
    <div className='min-h-screen'>
        <ChannelBanner  />
        <div>
        <Tabs defaultValue="content" className="  mt-10 py-2 pl-3 ">
  <TabsList>
    <TabsTrigger value="content">Content</TabsTrigger>
    <TabsTrigger value="badges">Badges</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>
  </TabsList>
  <TabsContent value="content">
    <div className='w-full bg-red-500'>
    Make changes to your account here.
    </div>
 
    </TabsContent>
  <TabsContent value="badges">
    Change your badges here.
    </TabsContent>
    <TabsContent value="about">
    Change your info here.
    </TabsContent>
</Tabs>

        </div>
    </div>
  )
}
