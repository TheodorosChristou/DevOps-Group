import dynamic from "next/dynamic";

export default function notFound() {
  const Documentation = dynamic(() => import('../components/Documentation'), { ssr:false} )

  return(<Documentation/>)
}