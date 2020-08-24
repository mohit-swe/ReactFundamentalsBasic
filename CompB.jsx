import React from 'react';

import {DirectFromB} from "./SHOW_CONTEXT";

const CompB= () =>{

    return (<div><DirectFromB.Consumer> 
       
         {(valu)=>{return <h1>My name is Jp Morgan in B , {valu} from SHOW_CONTEXT </h1>}
            
        } 
          </DirectFromB.Consumer></div>
          )
}

export default CompB;