import React,{ Component } from 'react';
import logProps from './logProps'

const HOCforwardRef = React.forwardRef((props,ref)=>(
  <button
    className="vickyButton" 
    ref={ref} 
    onClick={props.handleClick}
    > 
    {props.children}
  </button>
));
export default logProps(HOCforwardRef);