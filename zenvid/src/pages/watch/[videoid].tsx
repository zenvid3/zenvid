import React from 'react'
import { useRouter } from "next/router";
import { useQuery } from '@apollo/client';
import { apolloClient } from '@/graphql/apolloClient';
import VideoPage from '@/components/watch/VideoPage';
import { IPFS_GATEWAY2 } from '@/assets/constant';
import Head from 'next/head';
import { GET_VIDEO_BY_ID } from '@/graphql/fragments/getVideoById';
export default function VideoId({post} : any) {
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
    const [profileId, postId] = videoid?.split("-");
   
    const activeVideo  = post?.notes[0]

  return (
    <div>
  <Head>
            <title>{post?.metadata?.content.title}</title>
            <meta name='description' content={post?.metadata?.content.content} />

              {/* Twitter */}
<meta name="twitter:card" content={post?.metadata?.content.title} key="twcard" />
<meta name="twitter:creator" content={`xTube app`} key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content={`/watch/${postId}`} key="ogurl" />
<meta property="og:image" content={`${IPFS_GATEWAY2}${post?.metadata?.content?.attachments[0].name}`} key="ogimage" />
<meta property="og:site_name" content={`xTube -  Decentralized video shring platform`} key="ogsitename" />
<meta property="og:title" content={post?.metadata?.content.title} key="ogtitle" />
<meta property="og:description" content={post?.metadata?.content.content} key="ogdesc" />
        </Head>
        <VideoPage 
          videoUri={activeVideo?.metadata?.content?.attachments[0]?.address}
          videoCover={activeVideo?.metadata?.content?.attachments[0]?.name}
          videoTitle={activeVideo?.metadata?.content?.title}
          createdAt={activeVideo?.publishedAt }
          channelId={activeVideo?.noteId}
          vidStats={activeVideo?.stat} 
          channelInfo={activeVideo.character}
        />
    </div>
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
