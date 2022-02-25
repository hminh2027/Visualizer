import React, { useContext, useEffect, useState } from 'react'
import { transformHandler } from '../../../animations/animationsHandler.js'
import { store } from '../../../store/store'

import styles from './ProcessSlider.module.css'

const ProcessSlider = () => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

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
        transformHandler(i, context.state.animations[i].positions)
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