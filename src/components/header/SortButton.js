import React, { useContext, useState } from 'react'

import { animationsHandler } from '../../animations'
import { getBubbleSortAnimations, getMergeSortAnimations, getSelectionSortAnimations } from '../../animations/getAnimations'
import { store } from '../../store/store'

import styles from './SortButton.module.css'

const SortButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const [timeouts, setTimeouts] = useState([])

    const mergeSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getMergeSortAnimations(array)
            dispatch({ type: 'SET_ANIMATIONS', payload: animations })
        }
        else animations = context.state.animations
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts)
    }

    const bubbleSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getBubbleSortAnimations(array)
            dispatch({ type: 'SET_ANIMATIONS', payload: animations })
        }
        else {animations = context.state.animations}
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts)
    }

    const selectionSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getSelectionSortAnimations(array)
            dispatch({ type: 'SET_ANIMATIONS', payload: animations })
        }
        else animations = context.state.animations
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts).then(()=>{
            console.log('finished animations')
        })
    }

    const sortingAlgorithms = [bubbleSort,  mergeSort, selectionSort]

    const sortingHandler = index => {
        sortingAlgorithms[index](context.state.array, context.state.lastAnimationIndex + 1)
        dispatch({ type: 'SET_IS_SORTING', payload: true })

    }

    const resetStore = () => {
        // dispatch({ type: 'SET_IS_SORTING', payload: false })
        // // dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: [] })
        // dispatch({ type: 'SET_ANIMATIONS', payload: [] })

    }

    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={resetStore}>rs</button>
            <button className={styles.sort_btn} onClick={()=>sortingHandler(context.state.sortingTab)}>Sort</button>
        </div>
    )
}

export default SortButton