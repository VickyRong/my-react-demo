import React from 'react'
export const themes = {
    light:{
        foreground : '#fff',
        background : '#eee'
    },
    dark:{
        foreground:'#000',
        background:'#9E9E9E'
    }
}

export const ThemeContext = React.createContext(
    themes.dark
)
