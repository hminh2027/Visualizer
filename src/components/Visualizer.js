import React, { useContext, useEffect, useState } from 'react'
import { mergeSort } from '../animations/mergeSort'
import { store } from '../store/store'

import styles from './Visualizer.module.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    useEffect(()=>{
        dispatch({ type: 'UPDATE_ARRAY', payload: newArray(5) })

    }, [context.length, dispatch])

    const newArray = (length) => {
        let tempArray = []
        for (let i = 0; i < length; i++) 
            tempArray.push(generateRandom(10, 300))
        
        return tempArray
    }

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className={styles.container}>
            {context.state.length > 0 && context.state.array.map((value, index) => (
                <div style={{height: `${value/10}%`}} className={styles.bar} key={index}>
                    {value}
                </div>
            ))}
            <button onClick={()=>mergeSort(context.state.array)}>click me</button>
        </div>
        
    )
}

export default Visualizer