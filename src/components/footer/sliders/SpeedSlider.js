import React, { useContext } from 'react'
import { store } from '../../../store/store'

import styles from './SpeedSlider.module.css'

const SpeedSlider = () => {
    const context = useContext(store)
    const { dispatch } = context

    const changeSizeHandler = e => {
        dispatch({ type: 'UPDATE_SPEED', payload: (1 / (e.target.value * 2.5)) * 5000 })
    }

    return (
        <div className={styles.container}>
            Slow
            <input
            min='1' 
            max='5'
            defaultValue='2'
            type='range'
            disabled={context.state.isSorting ? 'disabled' : ''}  
            onChange={changeSizeHandler} 
            className={styles.slider}
            />
            Fast
        </div>
    )
}

export default SpeedSlider