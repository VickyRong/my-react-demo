//列表基础写法
// const numbers = [1,3,5,7,9];
// const double = numbers.map((item) => item * 2);
// console.log(double); 

// const listItem = numbers.map((item)=> 
//     <li> { item } </li>
// )

// ReactDOM.render(
//     <ul> { listItem }</ul>,
//     document.getElementById('root')
// )

//列表封装成组件
// function NumberList(props){
//     const numbers = props.numArr;
//     const listItem = numbers.map((item) => 
//     <li key={ item.toString() } >{ item * 2 }</li> //添加key解决报错 ( a key should be provided for list items)
//  )
//     return(
//         <ul>{ listItem }</ul>
//     )
// }

// const numArr = [ 1,2,3,7,9]; 
// ReactDOM.render(
//     <NumberList numArr = { numArr } />,
//     document.getElementById('root')
// )

//用keys提取组件（1.错误写法）
function ListItem(props) {
    const value = props.value;
    return (
        // 错啦！你不需要在这里指定key:  //  与其兄弟节点做比较
        <li key={value.toString()}>
            {value}
        </li>
    );
}
  
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        //错啦！元素的key应该在这里指定：
        <ListItem value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
  
//用keys提取组件（2.正确写法）
function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
}
  
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ListItem key={number.toString()} value={number} />
    );
        return (
            <ul>
            {listItems}
            </ul>
        );
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
  
        )}
      </ul>
    );
  }

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);


//在jsx中嵌入map()
