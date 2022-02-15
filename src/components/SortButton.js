import React, { useContext, useState } from 'react'

import { animationsHandler } from '../animations'
import { getBubbleSortAnimations, getMergeSortAnimations } from '../animations/getAnimations'
import { store } from '../store/store'

import styles from './SortButton.module.css'

const SortButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const [timeouts, setTimeouts] = useState([])

    const mergeSort = array => {
        const animations = getMergeSortAnimations(array)
        const timeouts = animationsHandler(animations)
        setTimeouts(timeouts)

    }

    const bubbleSort = array => {
        const animations = getBubbleSortAnimations(array)
        const timeouts = animationsHandler(animations)
        setTimeouts(timeouts)
    }

    const sortingAlgorithms = [bubbleSort,  mergeSort]

    const sortingHandler = index => {
        sortingAlgorithms[index](context.state.array)
    }

    const stopHandler = () => {
        dispatch({ type: 'SET_IS_SORTING', payload: false })
        for (let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i])
        }
        console.log('stop clicked')
    }

    return (
        <>
        <button onClick={()=>sortingHandler(context.state.sortingTab)}>Sort</button>
        <button onClick={stopHandler}>Stop</button>
        </>
    )
}

export default SortButton