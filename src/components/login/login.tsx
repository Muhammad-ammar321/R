import {  useState, type ChangeEvent, type FormEvent } from 'react'

import './login.css'


const Login =()=>{

    const [user,setUser] = useState({email:'',password:''});

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        const {name ,value} = event.target
        setUser((preventData)=>({...preventData, [name]:value}))

    }

    const onSubmit =(e:FormEvent<HTMLFormElement>)=>{
        console.log('user',user)
        e.preventDefault()
    }
    

    return(

        <section className='login-section'>
            
            <h1 className='loginheading'>login page</h1>
            
            <form onSubmit={onSubmit} className='login-form'>
                
                <label htmlFor="email" >Email</label>
                <input type="email" name='email' value={user.email} onChange={handleInputChange} id="email"/>
               
                <label htmlFor="password">Password</label>
                <input type="password"name='password' value={user.password} onChange={handleInputChange} id='password' />
                <button >Submit</button>
            
            </form>

        </section>
    )
}
export default Login