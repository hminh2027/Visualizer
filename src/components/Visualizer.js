import React, { useContext, useEffect, useState } from 'react'
import { generateUniqueArray } from '../helpers/util'
import { store } from '../store/store'

import styles from './Visualizer.module.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    useEffect(()=>{
        dispatch({ type: 'UPDATE_ARRAY', payload: generateUniqueArray(20) })

    }, [context.length, dispatch])
    

    return (
        <div className={styles.container}>
            <div className={styles.left_bar}></div>
            <div className={styles.middle_bar}>
                <div className={styles.bars_wrapper}>
                    {context.state.length > 0 && context.state.array.map((value, index) => (
                        <div style={{height: `${value*2}%`}} className={styles.bar} key={index}>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>          
            </div>
            <div className={styles.right_bar}></div>
        </div>
        
    )
}

export default Visualizer