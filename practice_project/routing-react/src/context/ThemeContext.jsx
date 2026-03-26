import { useState } from 'react'
import { createContext } from 'react'

export const ThemedataContext = createContext()

const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            <ThemedataContext.Provider value={[theme, setTheme]}>
                {props.children}
            </ThemedataContext.Provider>
        </div>
    )
}

export default ThemeContext
