import React from 'react';
import dynamic from 'next/dynamic';
import {useSession} from "next-auth/react"


  export default function Upload() {

    const{data: session} = useSession();
    var valid: boolean
    
    if(session){
        valid = true
    }else{
        valid = false
    }

    const Uploader = dynamic(() => import('../components/Uploading'), { ssr:false} )

    return(<Uploader session={valid}/>)

  }