import React,{ Component } from 'react';

const CreateRef = React.forwardRef((props,ref)=>(
  <button
   className="vickyButton" 
   ref={ref} 
   onClick={props.handleClick}
   > 
   {props.children}
  </button>
));
export default CreateRef;