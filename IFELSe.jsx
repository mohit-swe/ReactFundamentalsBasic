import React from 'react';
import ReactDOM from 'react-dom';

const  person = prompt("Please enter your name:", "Harry Potter");
let txt,txt1;
const IFELSe = ()=>
{
    if (person == null || person == "") {
        return (
        txt = "U have not entere input in the prompt. "
        )
      } 
      
      else {

        return(
         txt1 = "Hello " + person + "! How are you today?"

        )
      }
 
}

export default IFELSe