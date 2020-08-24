import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';

function Card(props)
{
return(
<React.Fragment>

<div className="mdn"> <a href={props.link1}>MDN</a></div>

<div className="medium"><a href={props.link2}>Medium</a></div>

</React.Fragment>

);
 
}

export default Card;