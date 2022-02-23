import React, { useContext, useEffect } from 'react'
import { store } from '../store/store'

const ThemeProvider = (props) => {
    const context = useContext(store)

    useEffect(()=>{
        // import(`../themes/${context.state.theme}.css`)
        import(`../themes/darkmode.css`)

    }, [context.state.theme])

    return (
        <>{props.children}</>
    )
}

export default ThemeProvider