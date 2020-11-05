import React, { useState } from 'react';

const ThemeContext = React.createContext({});

export function ThemeContextProvider({children}){
    let initValue = null;
    const mode =  localStorage.getItem('dark');
    mode !== null? initValue = mode: initValue = true;
    const [dark, setDark] = useState(initValue === 'false'? false: true)
    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;