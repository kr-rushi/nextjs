import { useRouter } from "next/router"
import { MutableRefObject, useRef } from "react"

const EventPage =()=>{
    const inputEmail=useRef<HTMLInputElement>(null); ;
    const onSubmit=async(e:any)=>{
          e.preventDefault()
          let emailValue=''
          if(inputEmail?.current){
             
          emailValue=inputEmail?.current?.value}
          const eventId=router?.query.id
          try {
            const response=await fetch('/api/emailRegistration',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:emailValue,eventId})
            })
            const data=await response.json()
            console.log("🚀 ~ file: [id].tsx:19 ~ onSubmit ~ data:", data)
          } catch (error) {
            console.log(error)
          }
          console.log("🚀 ~ file: [id].tsx:9 ~ onSubmit ~ emailValue:", emailValue)
    }
    const router=useRouter()
    console.log("🚀 ~ file: [id].tsx:12 ~ EventPage ~ router:", router)
    return (
        
    
    <form onSubmit={onSubmit}>
<label>Our Single Event</label>
<input ref={inputEmail} type='email' id='email' placeholder='please insert your email here'/>
<button type="submit">submit</button>
    </form>
    
    )
}
export default EventPage;