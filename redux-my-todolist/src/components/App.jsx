import React from 'react';
import AddTodo from '../container/AddTodo';
import VisibleTodoList from '../container/VisibleTodoList'
// import FooterFilter from './FooterFilter';


class App extends React.Component{
   render(){
       return(
           <div>
                <AddTodo/>
                <VisibleTodoList/>
                {/* <FooterFilter/> */}
           </div>
       )
   }
}

export default App