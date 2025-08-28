
import useCounter from "./hooks/useCounter" 

const Counter = ()=>{
    const {counter ,increment,decremnet } = useCounter()

   return(
     <div>

        <span>    {counter}  </span>
            <div>
                <button onClick={increment}>increment</button>
                {/* <button onClick={()=>{set}} >Reset</button> */}
                <button onClick={decremnet} disabled = {!counter} >Decrement</button>
            </div> 
    </div>
    )
}

export default Counter