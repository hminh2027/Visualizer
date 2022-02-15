import React, { useContext, useEffect, useState } from 'react'
import { animationsHandler } from '../animations'
import { getBubbleSortAnimations, getMergeSortAnimations } from '../animations/getAnimations'
import { newArray } from '../helpers/util'
import { store } from '../store/store'

import styles from './Visualizer.module.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    useEffect(()=>{
        dispatch({ type: 'UPDATE_ARRAY', payload: newArray(5) })

    }, [context.length, dispatch])

    const mergeSort = array => {
        const animations = getMergeSortAnimations(array)
        animationsHandler(animations)
    }

    const bubbleSort = array => {
        const animations = getBubbleSortAnimations(array)
        animationsHandler(animations)
    }
    

    return (
        <div className={styles.container}>
            {context.state.length > 0 && context.state.array.map((value, index) => (
                <div style={{height: `${value/10}%`}} className={styles.bar} key={index}>
                    {value}
                </div>
            ))}
            <button onClick={()=>mergeSort(context.state.array)}>merge sort</button>
            <button onClick={()=>bubbleSort(context.state.array)}>bubble sort</button>

        </div>
        
    )
}

export default Visualizer