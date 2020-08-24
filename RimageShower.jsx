import React from 'react';
import ReactDOM from 'react-dom';
const RimageShower = (props)=>
{
    const imglink=`https://source.unsplash.com/300x300/?${props.name}`;
    return (

<React.Fragment>

<div>

<img src={imglink} alt="404"/> 

</div>

</React.Fragment>

    );
}
export default RimageShower;