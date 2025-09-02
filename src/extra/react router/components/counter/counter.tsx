import { useState } from "react";




const reducer = (state , action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count +1};
        case 'DECREMENT':
            return {count: state.count -1};
        default:
            return state;
    }
}

const Counter =()=>{
    const [count,setCount]= useState(0);
    
    const handleCount
}