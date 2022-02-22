import React, { useContext, useState } from 'react'

import { animationsHandler } from '../../animations'
import { getBubbleSortAnimations, getMergeSortAnimations, getSelectionSortAnimations } from '../../animations/getAnimations'
import { store } from '../../store/store'

import styles from './SortButton.module.css'

const SortButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const [timeouts, setTimeouts] = useState([])
    const [animationsS, setAnimationsS] = useState()

    const mergeSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getMergeSortAnimations(array)
            setAnimationsS(animations)
        }
        else animations = animationsS
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts)
    }

    const bubbleSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getBubbleSortAnimations(array)
            setAnimationsS(animations)
        }
        else animations = animationsS
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts)
    }

    const selectionSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getSelectionSortAnimations(array)
            setAnimationsS(animations)
        }
        else animations = animationsS
        const timeouts = animationsHandler(animations, index, dispatch, context.state.speed)
        setTimeouts(timeouts)
    }

    const sortingAlgorithms = [bubbleSort,  mergeSort, selectionSort]

    const sortingHandler = index => {
        sortingAlgorithms[index](context.state.array, context.state.lastAnimationIndex)
        dispatch({ type: 'SET_IS_SORTING', payload: true })

    }

    return (
        <div className={styles.container}>
            <button className={styles.sort_btn} onClick={()=>sortingHandler(context.state.sortingTab)}>Sort</button>
        </div>
    )
}

export default SortButton