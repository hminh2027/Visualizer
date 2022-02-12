import React, { useContext, useEffect, useState } from 'react'
import { getMergeSortAnimations } from '../algorithms'
import { store } from '../store/store'

import styles from './Visualizer.module.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    useEffect(()=>{
        dispatch({ type: 'UPDATE_ARRAY', payload: newArray(200) })

    }, [context.length, dispatch])

    const newArray = (length) => {
        let tempArray = []
        for (let i = 0; i < length; i++) 
            tempArray.push(generateRandom(10, 1000))
        
        return tempArray
    }

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(context.state.array);

        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33');
          console.log(animations[i].description)
          const isColorChange = i % 3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i].index
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const color = i % 3 === 0 ? 'red' : 'black'
            setTimeout(() => {
              barOneStyle.backgroundColor = color
              barTwoStyle.backgroundColor = color
            }, i * 3)
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i].index
              const barOneStyle = arrayBars[barOneIdx].style
              barOneStyle.height = `${newHeight/10}%`
            }, i * 3)
          }
        }
      }

    return (
        <div className={styles.container}>
            {context.state.length > 0 && context.state.array.map((value, index) => (
                <div style={{height: `${value/10}%`}} className={styles.bar} key={index}>
                    
                </div>
            ))}
            <button onClick={mergeSort}>click me</button>
        </div>
        
    )
}

export default Visualizer