import React ,{useState,useEffect} from 'react';
import axios from 'axios';
 const DataFetching =()=>
 {



    const [posts,setPost]=useState({})
    const [id,setID]=useState(1);
    const [idFromButtonClick,setIDForButton]=useState(1);

    const handleclick =() =>
    {
        setIDForButton(id)  
    }
    useEffect (()=>{
axios
.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)



.then((res )=>{
    console.log(res)
    setPost(res.data)
})
.catch((err)=>{
    console.log(err)
})
},[idFromButtonClick])






return (
<div>
<input type="text" value={id}   onChange={e=>setID(e.target.value)}/>
<button type="bottom"  onClick={handleclick}>Fetch 🤙</button>
<div>{posts.title} </div>
</div>


     )
}

 export default DataFetching