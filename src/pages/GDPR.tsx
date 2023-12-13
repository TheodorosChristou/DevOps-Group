import dynamic from "next/dynamic";

export default function notFound() {
  const Documentation = dynamic(() => import('../components/GDPR'), { ssr:false} )

  return(<Documentation/>)
}