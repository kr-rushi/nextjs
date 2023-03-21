import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({data}) => {
  return  <div>
    {data.map((ev)=>(
      <Link key={ev.id} href={`/events/${ev.id}`}>
        <Image alt='' src={ev.image} width={300} height={300}/><h2>{ev.title}</h2></Link>
    ))}
  
    <img/>
    <h2>Events in Barcelona</h2>
    

</div>
};
export default EventsPage;

export async function getStaticProps(){
const {events_categories}=await import('../../data/data.json')
return{
  props:{
    data:events_categories
  }
}
}