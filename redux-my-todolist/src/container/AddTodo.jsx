import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : ''  //输入框内容
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let inputValue = e.target.value;
        this.setState({ inputValue})
    }

    addTodo(){
        let { inputValue } = this.state;
        if(inputValue.trim() === ''){ return; }
        this.props.dispatch(addTodo(inputValue))
        this.setState({ inputValue : ''})
    }

    render(){
    let input;
       return(
           <div>
               <input type="text" 
                      value={ this.state.inputValue } 
                      onChange={ this.handleChange }
                      ref={node => (input = node)} />
               <button onClick={ () => this.addTodo() } >添加</button>
           </div>
       )
   }
}
export default connect()(AddTodo)