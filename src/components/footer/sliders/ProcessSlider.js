import React, { useContext, useEffect, useState } from 'react'
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
        dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: e.target.value })
        moveAnimation()
    }

    const moveAnimation = () => {
        const i = context.state.lastAnimationIndex

        for (let j = 0; j < context.state.animations[i].positions.length; j++) {
            arrayBars[j].style.transform = `translate(
                ${context.state.animations[i].positions[j].arr[i].x - context.state.animations[i].positions[j].arr[0].x}px,
                ${context.state.animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
            )`
        }
    }
    
    return (
        <div className={styles.container}>
            Animations Bar
            <input
            min='0' 
            max={range}
            value={value}
            type='range'
            //disabled={isRunning ? "disabled" : null}  
            onChange={changeAnimationHandler} 
            className={styles.slider}
            />
        </div>
    )
}

export default ProcessSlider