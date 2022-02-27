import React, { useContext, useEffect, useState } from 'react'
import { animationHandler } from '../../../animations/animationsHandler.js'
import { store } from '../../../store/store'

import styles from './ProcessSlider.module.css'

const ProcessSlider = () => {
    const context = useContext(store)
    const { dispatch } = context

    const [range, setRange] = useState(0)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        setRange(context.state.animations.length-1)

    }, [context.state.animations])

    useEffect(()=>{
        setValue(context.state.lastAnimationIndex)

    }, [context.state.lastAnimationIndex])

    const changeAnimationHandler = e => {
        const i = e.target.value
        animationHandler(i, context.state.animations, dispatch)
        dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: +e.target.value })
    }
    
    return (
        <div className={styles.container}>
            Animations Bar
            <input
            min='0' 
            max={range}
            value={value}
            type='range'
            disabled={context.state.isSorting ? "disabled" : null}  
            onChange={changeAnimationHandler} 
            className={styles.slider}
            />
        </div>
    )
}

export default ProcessSlider