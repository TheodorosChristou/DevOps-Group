import React from 'react';
import dynamic from 'next/dynamic';


  export default function Upload() {
    const Uploader = dynamic(() => import('../components/Uploading'), { ssr:false} )

    return(<Uploader/>)

  }