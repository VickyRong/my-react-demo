import React from 'react'
import { ThemeContext } from './theme-context'

function ThemeButton(props) {
    return(
        <ThemeContext.Consumer>
            {
                theme =>(

                    <button
                        {...props}
                        style = {{ 
                            backgroundColor:theme.background,
                            width:100,height:30,marginRight:20,
                            float:'left',
                        }}
                    >
                    </button>
                )
            }
        </ThemeContext.Consumer>
    )
}
export default ThemeButton