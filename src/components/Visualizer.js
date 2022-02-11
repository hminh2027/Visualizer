import React, { useEffect, useState } from 'react'

import styles from './Visualizer.module.css'

const Visualizer = () => {
    const [array, setArray] = useState([])
    const [length, setLength] = useState(300)

    useEffect(()=>{
        let tempArray = []
        for (let i = 0; i < length; i++) {
            tempArray.push(generateRandom(10, 1000))
        }
        setArray(tempArray)

    }, [length])

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className={styles.container}>
            {array.length > 0 && array.map((value, index) => (
                <div style={{height: `${value/10}%`}} className={styles.bar} key={index}>
                    
                </div>
            ))}
        </div>
        
    )
}

export default Visualizer