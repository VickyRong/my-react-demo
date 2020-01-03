import React,{ Component } from 'react';

function vickyButton(props) {
  console.log('props:',props)

  // 这里必须声明 textInput，这样 ref 才可以引用它
  let textInput = React.createRef();

  const handleClick = ()=> {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="聚焦input"
        onClick={handleClick}
      />
      <button>{props.children}</button>
    </div>
  );
}
export default vickyButton;