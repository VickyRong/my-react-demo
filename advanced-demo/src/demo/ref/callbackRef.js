import React,{ Component } from 'react';
import { render } from 'react-dom';

class CallBackRef extends Component {
  constructor(props){
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.focusTextInput = () => {
      if(this.textInput) this.textInput.focus();
    }
  }

  componentDidMount(){
    this.focusTextInput()
  }
  
  render(){
    return (
      <div>
        <input
          className='vicky'
          type="text"
          // ref={this.setTextInputRef}
          ref={(element)=> this.textInput = element }
          />

        <input
          type="button"
          value="聚焦input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
    
}
export default CallBackRef;