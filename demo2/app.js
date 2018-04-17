//类定义写法：
class UserName extends React.Component{
  render() {
    return <h1>my name is : { this.props.name }</h1>
  }
}

//函数定义写法：
function UserName(props){
  return <h1>my name is ~~~ { props.name } </h1>
}
const element = <UserName name = "vicky"/>

ReactDOM.render(
  <h1>sdfsfd</h1>,
  document.getElementById('root')
)