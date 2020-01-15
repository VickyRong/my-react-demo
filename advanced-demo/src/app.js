
import React, { useMemo, useState,Component } from 'react'
import CreateRef from './demo/ref/createRef'
import CallBackRef from './demo/ref/callbackRef'
import ForwardRef from './demo/ref/forwardRef'
import HOCforwardRef from './demo/ref/HOCforwardRef'
import ContextDemo from './demo/context/context-demo'


class App extends Component {
  constructor(props){
    super(props)
    // this.ref = React.createRef();
  }

  componentDidMount (){
    // this.ref.current.classList.add('xixi'); 
    // this.ref.current.focus();
  }

  // clickButton = () =>{
  //   console.log('我被点击了')
  // }

  render(){
    return (
      <>
        {/* <CreateRef >createRef</CreateRef> */}
        {/* <CallBackRef >callbackRef</CallBackRef> */}
        {/* <ForwardRef ref={this.ref} handleClick={this.clickButton}> 点我！</ForwardRef> */}
        {/* <HOCforwardRef ref={this.ref} handleClick={this.clickButton}> 高阶组件传递Ref </HOCforwardRef> */}
        <ContextDemo></ContextDemo>
      </>
    );
  }
}

export default App;
