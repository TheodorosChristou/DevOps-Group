import dynamic from "next/dynamic";

export default function notFound() {
  const Error404 = dynamic(() => import('../components/Error'), { ssr:false} )

  return(<Error404/>)
}