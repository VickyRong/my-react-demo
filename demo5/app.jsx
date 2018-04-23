function UserGreeting(props){
  return <h1> 欢迎回来！</h1>
}
function GuestGreeting(props){
  return <h1> 请登陆！</h1>
}

function LoginButton(props){
  return (
    <button onClick = { props.onClick } > login </button> //不太理解 ==> 参考demo2 组件的props
  )
}

function LogoutButton(props){
  return (
    <button onClick = { props.onClick } > logout </button>
  )
}

function Greeting(props){
  if(props.isLogin){
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
}


class LoginControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin : false
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLogin : true
    })
  }
  handleLogoutClick = () =>{
    this.setState({
      isLogin : false
    })
  }

  render(){
    let button = null;
    if(this.state.isLogin){
      button = <LogoutButton onClick = { this.handleLogoutClick } />
    }else{
      button = <LoginButton onClick = { this.handleLoginClick } />
    }

    return (
      <div>
        <Greeting isLogin = { this.state.isLogin } />
        { button }
      </div>
    )
  }
}

 
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)