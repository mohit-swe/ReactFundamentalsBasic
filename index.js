import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import * as impoexpo from './Import_export.jsx';
import Card from "./Card";
import IFELSe from  './IFELSe';
import HOOKS from'./HOOKS';
import chd,{bengaluru,boy,ghd} from './Import_export.jsx';
import Searcher from './Searcher';

const bangalore="karnataka"
const tamil_nadu="rameshwaram"
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
const inlineCSS_in_react={
  fontSize:"45px",
  color:"orange",
  textAlign:"center"
};



  
  
  
  


ReactDOM.render(


  <React.Fragment><h1>  this is mohitclouds limited  bengaluru city,{bangalore} INDIA , WORLD HQ:  14 mohitclouds tower bay area , Sanfransisco ,CA USA. ASIA DEVELOPMENT CENTERS Hong kong , Tokyo Japan, Shenzhen china, Dubai UAE , Singapore.</h1>
  <p> is a software and app development company based on usa.{6*5} 💛💔</p>
 


<App/>

<HOOKS/>
<ul>
<li> {boy}</li>
<li>{ghd()}</li>
<li>{chd()}</li>
<li>{bengaluru}</li>



</ul>




  <p> chait bandu so {`${tamil_nadu} ${bangalore}`}</p>
  <ol>
  <li>dart</li>
  <li>react</li>
  <li>javascript</li>
  <li>java</li>
  <li style={inlineCSS_in_react}>எதிர்வினை  😧    రియాక్ట్   🍎   react  🎷   ಜೆಎಸ್ಪ್ರತಿಕ್ರಿಯಿಸಿ  🏫  प्रतिक्रिया  🙀 </li>
  </ol>
  <a className="frank" href="https://picsum.photos/images " target="_thapa">
  <img  src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" alt="techfault do not worry" /> 
  </a>
  <p className="dated">Current date is={currDate}</p>
  <p>Current time is={currTime}</p> 
  </React.Fragment>,
   document.getElementById('root')
   

);




ReactDOM.render(
  
  <React.Fragment>
  
  <IFELSe/>
  
  </React.Fragment>,
  document.getElementById("main")
  );
  
ReactDOM.render(
  <React.Fragment>
  <Card link1="https://developer.mozilla.org/en-US/"/> 
  <Card link2="https://medium.com/"/>
  
  </React.Fragment>,
document.getElementById("microd")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
