import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import RimageShower from './RimageShower';
const Searcher = () =>{
    const[imgpass,setImg]=useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;
        setImg(data);
    };
return (
    
    <React.Fragment>
    <div >
    
    <input type="text" placeholder="Search image by typeing name " value={imgpass} onChange={inputEvent}/>
    
    
    {imgpass === "" ? null : <RimageShower name={imgpass}/>}
    </div>
    
    
    
    
    
    
    
    
    
    
    </React.Fragment>
    
    );


}
export default Searcher;
