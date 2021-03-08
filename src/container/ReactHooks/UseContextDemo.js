
/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-03 14:44:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-03 15:17:22
 */
import React,{useContext} from 'react';
const themes = {
    light: {
        foreground: '#000',
        background: 'red',
    },
    dark:{
        foreground:'#fff',
        background:'#f00'
    }
};

const ThemeContext = React.createContext(themes.light);

function ThemeButton(){
    const theme = useContext(ThemeContext);
    console.log(theme);
    return <button style={{background:themes.background,color:theme.foreground}}>
        demo
    </button>
}
function Toolbar(){
    return <div>
        <ThemeButton></ThemeButton>
    </div>
}
function App(){
    return <ThemeContext.Provider value={themes.dark}>
        <Toolbar></Toolbar>
    </ThemeContext.Provider>
}

export default App;