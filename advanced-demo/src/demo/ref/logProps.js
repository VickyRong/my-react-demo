import React,{ Component } from 'react';

function logProps(WrappedComponent){
    class LogProps extends Component {
        componentDidUpdate(prevProps) {
            console.log('old:',prevProps)
            console.log('new:',this.props)
        }

        render(){
            const { forwardedRef } = this.props; //接受高阶组件传递过来的forwardedRef，其实是真正的父组件的ref
            return <WrappedComponent ref={forwardedRef} { ...this.props }></WrappedComponent>
        }
    }
    return React.forwardRef((props,ref)=>( //获取父组件传过来的ref,当做forwardedRef参数传给包裹的子组件
         <LogProps { ...props } forwardedRef={ref}></LogProps>
    ))
}

export default logProps;