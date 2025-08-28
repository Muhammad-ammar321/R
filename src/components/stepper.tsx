import { useState } from "react";

const Stepper = ()=>{
    const steps = [1,2,3];
    const [current,setCurrent]= useState(1)

    const handleNext =()=>{
        setCurrent(current + 1)
    }
    
    return(
        <>
        <div style={{display:"flex",gap:20}}>      
            {/* {steps.map((step)=><span className={"item" ${current === step }}  key={step}>{step}</span>)} */}

        </div>
        <div>
            
            <button onClick={handleNext}> Previous</button>
            <button onClick={()=>{setCurrent( current - 1) }}>Next</button>
        </div>
        </>
    )
}

export default Stepper