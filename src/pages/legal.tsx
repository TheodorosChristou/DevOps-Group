import dynamic from "next/dynamic";

export default function notFound() {
  const Documentation = dynamic(() => import('../components/Legal'), { ssr:false} )

  return(<Documentation/>)
}