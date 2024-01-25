import React, {useState} from 'react'
import { useRouter } from "next/router";
import { useQuery } from '@apollo/client';
import { apolloClient } from '@/graphql/apolloClient';
import VideoPage from '@/components/watch/VideoPage';
import { IPFS_GATEWAY2 } from '@/assets/constant';
import Head from 'next/head';
import { GET_VIDEO_BY_ID } from '@/graphql/fragments/getVideoById';
import { NextSeo } from 'next-seo';
import VideoFullSkeleton from '@/components/skeletons/FullVideoSkeleton';
export default function VideoId({post, loading} : any) {
    const router = useRouter();
    const { videoid } = router.query;
    console.log("the full video", post);
    // Add error checking for router.query
    if (!router || !videoid) {
      return <div>Loading...</div>;
    }

    
    /*===================================
     Splitting  Profile Id and post id
     =======================================
     */

   // const [profileId, postId] = videoid?.split("-");

   //@ts-ignore
   if(loading){
    return(
     < VideoFullSkeleton  />
    )
   }
   
    const activeVideo  = post?.notes[0]

  return (
    <>
   <NextSeo
    title={post?.notes[0].metadata?.content?.title}
    description={post?.notes[0].metadata?.content?.content}
       openGraph={{
        title : post?.notes[0].metadata?.content?.title,
        description: post?.notes[0].metadata?.content?.content ,
        url : `https://www.zenvid.xyz/${post?.notes[0].characterId }-${post?.notes[0].noteId}`,
         images :[
          {
            url : `${IPFS_GATEWAY2}${post?.notes[0].metadata?.content?.attachments[0].name}`,
            width: 800,
            height: 600,
            alt: ` ${post?.notes[0].metadata?.content?.title}`,
            type: 'video/mp4',
            
          }
         ],
         siteName : "Zenvid"
       }}
    
   />
 
        <VideoPage 
          videoUri={activeVideo?.metadata?.content?.attachments[0]?.address}
          videoCover={activeVideo?.metadata?.content?.attachments[0]?.name}
          videoTitle={activeVideo?.metadata?.content?.title}
          createdAt={activeVideo?.publishedAt }
          channelId={activeVideo?.characterId}
          vidStats={activeVideo?.stat} 
          channelInfo={activeVideo.character}
          videoId={activeVideo.noteId}
          loading={loading}
        />
    </>
  )
}

export async function getServerSideProps({ params }: any) {
    const { videoid } = params;
    const [profileId, postId] = videoid?.split("-");

    if (!videoid) {
        // Handle the case when videoId is not present
        return {
          props: {
            data: null,
            videoId: null,
            loading: false,
            error: "Video ID not provided",
          },
        };
      }
    const ProfileId_persed = parseInt(profileId, 10);
    const PostId_parsed = parseInt(postId, 10);

    // Fetch the post data using  apollo client
  
    const {data, loading, error, errors} = await apolloClient.query({
        query : GET_VIDEO_BY_ID,
        variables : {
            "where": {
                "characterId": {
                  "equals": ProfileId_persed
                },
                "AND": [
                  {
                    "noteId": {
                      "equals": PostId_parsed
                    }
                  }
                ]
              }
        }
        })

        return {
            props : {
                post : data,
                videoId : postId,
                loading : loading,
               // error : error

            }
        }
  }
