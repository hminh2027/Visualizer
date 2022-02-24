import React, { useContext } from 'react'

import { MdSkipPrevious } from 'react-icons/md'
import { store } from '../../../store/store'

import styles from './PrevButton.module.css'

const PrevButton = () => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

    const context = useContext(store)
    const { dispatch } = context

    const moveAnimation = () => {
        const i = context.state.lastAnimationIndex - 1
        console.log(i)
        for (let j = 0; j < context.state.animations[i].positions.length; j++) {
            arrayBars[j].style.transform = `translate(
                ${context.state.animations[i].positions[j].arr[i].x - context.state.animations[i].positions[j].arr[0].x}px,
                ${context.state.animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
            )`
        }
        dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i})
    }
    return (
        <div onClick={moveAnimation} className={styles.container}>
            <MdSkipPrevious/>
        </div>
    )
}

export default PrevButton