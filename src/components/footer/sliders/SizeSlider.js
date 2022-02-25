import React, { useContext } from 'react'
import { generateUniqueArray } from '../../../helpers/util'
import { store } from '../../../store/store'

import styles from './SizeSlider.module.css'

const SizeSlider = () => {
    const context = useContext(store)
    const { dispatch } = context

    const changeSizeHandler = e => {
        dispatch({ type: 'UPDATE_LENGTH', payload: e.target.value })
        dispatch({ type: 'UPDATE_ARRAY', payload: generateUniqueArray(e.target.value) })
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