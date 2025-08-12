import type React from "react";

interface   BioProps{
    name:string;
    email:string;
    occupation?:string;
    children?:React.ReactNode;
}

const Bio = (props: BioProps)=>{
    return(
        <>
    <h1>Profile</h1>
    <div>Your Name: {props.name}</div>
    <div>Your Email: {props.email}</div>
    {props.occupation ? <div>Occupation: {props.occupation}</div> : <div> Occupation not provided </div> }
    
    <div>{props.children}</div>
    </>
    )
}
export default Bio