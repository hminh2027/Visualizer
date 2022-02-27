import React, { useContext } from 'react'
import { clearTimeouts, generateUniqueArray, resetColumns, resetStore } from '../../../helpers/util'
import { store } from '../../../store/store'

import styles from './SizeSlider.module.css'

const SizeSlider = () => {
    const context = useContext(store)
    const { dispatch } = context

    const changeSizeHandler = e => {
        dispatch({ type: 'SET_LENGTH', payload: e.target.value })
        dispatch({ type: 'SET_ARRAY', payload: generateUniqueArray(e.target.value) })
        clearTimeouts(context.state.timers, dispatch)
        resetColumns()
        resetStore(dispatch)
    }

    return (
        <div className={styles.container}>
            Small
            <input
            min='2' 
            max='20'
            defaultValue='10'
            type='range'
            disabled={context.state.isSorting ? "disabled" : null}  
            onChange={changeSizeHandler} 
            className={styles.slider}
            />
            Large
        </div>
    )
}

export default SizeSlider