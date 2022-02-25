import React, { useContext } from 'react'

import { animationsHandler } from '../../animations/animationsHandler.js'
import { getBubbleSortAnimations, getMergeSortAnimations, getSelectionSortAnimations } from '../../animations/getAnimations'
import { store } from '../../store/store'

import styles from './SortButton.module.css'

const SortButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const sortingAlgorithms = [getBubbleSortAnimations,  getMergeSortAnimations, getSelectionSortAnimations]

    const sortingHandler = index => {
        if(context.state.isSorting) return
        // Variables
        let animations
        const lastAnimationIndex = context.state.lastAnimationIndex + 1
        // Check if need to get animations
        if (lastAnimationIndex === 1) {
            animations = sortingAlgorithms[index](context.state.array)
            dispatch({ type: 'SET_ANIMATIONS', payload: animations })
        }
        else animations = context.state.animations
        // Save timers
        const timers = animationsHandler(animations, lastAnimationIndex, dispatch, context.state.speed)
        dispatch({ type: 'SET_TIMERS', payload: timers })
    }

    return (
        <div className={styles.container}>
            <button className={styles.sort_btn} onClick={()=>sortingHandler(context.state.sortingTab)}>Sort</button>
        </div>
    )
}

export default SortButton