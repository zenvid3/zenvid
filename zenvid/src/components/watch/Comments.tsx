import React, {useState} from 'react'
import { useIsConnected, usePostNoteForNote , ConnectButton, useAccountCharacter, useConnectedAccount} from '@crossbell/connect-kit'
import { CharacterAvatar } from "@crossbell/ui";
export default function Comments() {
    const character = useAccountCharacter();
    const isConnected = useIsConnected();
    const [commentTxt, setcommentTxt] = useState("");
    const account = useConnectedAccount();
  return (
    <div>Comments</div>
  )
}
