import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const HOOKS = ()=>
{
    const [hooks_states,NormaluseState_no_parameter]=useState("current and initial data = mohit  ojha ");
    
    const[COUNT,setCount]=useState(100);
    
    const NUMBERVAL = ()=>
    {
        setCount(COUNT+1);
    }

const VAL=()=>
{
    NormaluseState_no_parameter(" a software development engineer");

}

return(
<React.Fragment>

<h1>{COUNT}</h1>
<button  onClick={NUMBERVAL}>CLICK HERE</button>
<h2>{hooks_states}</h2>
<button onClick={VAL} >Click button</button>
</React.Fragment>

);
 
}


export default HOOKS
