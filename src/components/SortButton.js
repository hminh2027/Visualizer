import React, { useContext, useState } from 'react'

import { animationsHandler } from '../animations'
import { getBubbleSortAnimations, getMergeSortAnimations, getSelectionSortAnimations } from '../animations/getAnimations'
import { store } from '../store/store'

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
        const timeouts = animationsHandler(animations, index, dispatch)
        setTimeouts(timeouts)
    }

    const bubbleSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getBubbleSortAnimations(array)
            setAnimationsS(animations)
        }
        else animations = animationsS
        const timeouts = animationsHandler(animations, index, dispatch)
        setTimeouts(timeouts)
    }

    const selectionSort = (array, index) => {
        let animations
        if (!index || index == 0) {
            animations = getSelectionSortAnimations(array)
            setAnimationsS(animations)
        }
        else animations = animationsS
        const timeouts = animationsHandler(animations, index, dispatch)
        setTimeouts(timeouts)
    }

    const sortingAlgorithms = [bubbleSort,  mergeSort, selectionSort]

    const sortingHandler = index => {
        sortingAlgorithms[index](context.state.array, context.state.lastAnimationIndex)
    }

    const stopHandler = () => {
        //dispatch({ type: 'SET_IS_SORTING', payload: false })
        for (let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i])
        }
        console.log('stop clicked')
        console.log(context.state.lastAnimationIndex)
    }



    return (
        <>
        <button onClick={()=>sortingHandler(context.state.sortingTab)}>Sort</button>
        <button onClick={stopHandler}>Stop</button>
        </>
    )
}

export default SortButton