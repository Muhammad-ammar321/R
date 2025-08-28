import './newsletter.css'
import {  useState, type ChangeEvent, type FormEvent } from 'react'
const Newsletter = () => {

    const [email,setEmail] = useState('');

    const handleEmailChange = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log('event>>>>>>>>>',event)
        setEmail(event.target.value)

    }

    const onSubmit =(e:FormEvent<HTMLFormElement>)=>{
        console.log('email',email)
        e.preventDefault()
    }
    return(

        <section className='newsletter-section'>
            
            <h1 className='newsletterheading'>Newsletter</h1>
            
            <form onSubmit={onSubmit} className='newsletter-form'>
                
                <label htmlFor="email" >Email</label>
                <input type="email" value={email} onChange={handleEmailChange} id="email"/>
                <button type="submit">Submit</button>
            
            </form>

        </section>
    )
}

export default Newsletter