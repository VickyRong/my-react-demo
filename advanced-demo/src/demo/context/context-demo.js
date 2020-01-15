import React,{ Component } from 'react'
import { ThemeContext,themes } from './theme-context'
import ThemeButton from './theme-button';
 

function Toolbar(props) {
    return(
        <ThemeButton onClick={props.changeTheme}>
           更换主题
        </ThemeButton>
    )
}

class ContextDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme:themes.light
        }
    }

    toggleTheme = () =>{
        console.log('theme1:',this.state.theme)
        this.setState(state =>({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }))
    }

    render(){
        return(
           <>
               <ThemeContext.Provider value={ this.state.theme }>
                    <Toolbar changeTheme={this.toggleTheme}></Toolbar>
               </ThemeContext.Provider>
               <ThemeButton></ThemeButton>
           </>
        )
    }
}

export default ContextDemo