import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage =({data,pageName}:{data:any,pageName:any})=>{
    return <div>
        <h1>{pageName}</h1>
        {data.map((ev:any)=>(
    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} > 
    
        <Image width={300} height={300} alt='' src={ev.image}/>
    <h2>{ev.title}</h2>
    <p>{ev.description}</p>
 
    </Link>))}
    </div>
}
export default EventsCatPage;

export async function getStaticPaths(){
    const {events_categories}=await import('../../../data/data.json')
const allPaths=events_categories.map((ev:any)=>{

    return{
        
            params:{
                categories:ev.id.toString()
            }
        
    }
})
return{
    paths:allPaths,
    fallback:false
}
}

export async function getStaticProps(context:any){
    const id=context?.params.categories;
    const{allEvents}=await import('../../../data/data.json')
    const data=allEvents.filter(ev=>ev.city===id)
    return {
        props: {data,pageName:id}
    }
}