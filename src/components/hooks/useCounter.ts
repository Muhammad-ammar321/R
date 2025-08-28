import { useState } from "react";
const useCounter =()=>{

    const [counter,setCounter] = useState(0);
    
    const increment = ()=>{
        setCounter((next)=> next +1)
    }
    const decremnet =()=>{
        setCounter(counter - 1)
    }


    return {counter,increment,decremnet}
}

export default useCounter