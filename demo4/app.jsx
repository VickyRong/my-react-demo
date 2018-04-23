class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = { isToggle : true }
    // this.handleClick = this.handleClick.bind(this) //为什么要绑定？
  }
  handleClick(){
    console.log('this is',this);
    // this.setState( (prevState) => ({
    //   isToggle : !prevState.isToggle
    // }))
  }

  handleClick = () => {  //属性初始化器语法? 不理解
    // console.log('this is',this);
    this.setState( (prevState) => ({
      isToggle : !prevState.isToggle
    }))
  } 

  render(){
    return (
        <button onClick = { this.handleClick }>
          { this.state.isToggle ? 'ON' : 'OFF' }
        </button>
    )
  }
}



class Popper extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop(name, e){    //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* Pass params via bind() method. */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
          </div>
      );
  }
}

ReactDOM.render(
  <div>
    <Toggle />
    <Popper />
  </div>,
  document.getElementById('root')
)