//基础写法
// function trick1(){
//   let time = new Date().toLocaleTimeString();
//   const element = (
//     <h1>写法一: 当前时间是: { time } </h1>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById("root")
//   )
// }
// setInterval(trick1,1000);

//用函数封装组件
// function Clock(props){
//   let element = <h1>写法二: 封装组件获取时间: { props.time.toLocaleTimeString() } </h1>;
//   return element;                               
// }

// function trick2(){
//   ReactDOM.render(
//     <Clock time = { new Date() }/>,
//     document.getElementById("root")
//   )
// }
// setInterval(trick2,1000);

//把函数封装成类
// class Clock1 extends React.Component{
//   render(){
//     return (
//       <h1>写法三: 封装成类后的时间：{ this.props.time.toLocaleTimeString() }</h1>
//     )
//   }
// }
// function trick3(){
//   ReactDOM.render(
//     <Clock1 time = { new Date() } />,
//     document.getElementById("root")
//   )
// }
// setInterval(trick3,1000);

//用state管理状态
class TimeClock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount(){
    this.timeID = setInterval(
      () => this.trick(),
      1000);
  }
  componentWillUnmount(){
    clearInterval(this.timeID);
  }
  trick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return (
      <h3>写法四：用state控制组件后的时间：{ this.state.date.toLocaleTimeString()} </h3>
    )
  }
}
ReactDOM.render(
  <TimeClock />,
  document.getElementById("root")
);