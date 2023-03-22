import Image from "next/image"
import Link from "next/link"

export const HomePage=({data}:{data:any})=>(
    
    <main>
       {data?.map((ev:any)=><Link key={ev.id} href={`/events/${ev.id}`}><Image width={200} height={200} alt='' src={ev.image}/><h2>{ev.title}</h2><p>{ev.description}</p></Link>) }
      </main>
)