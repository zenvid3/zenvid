import { useQuery } from "@apollo/client";
import { DISCOVER_VIDEOS } from "@/graphql/fragments/discoverVideos";

export const useDiscoverVideos = () => {
    const {data, loading, error} = useQuery(DISCOVER_VIDEOS, {
        variables : {
            "where": {
                "metadata": {
                  "content": {
                    "path": [
                      "sources"
                    ],
                    "array_contains": ["xTube_v1"]
                  }
                }
              }
        }
    })

    return {
        data,
        loading,
        error
    }
}