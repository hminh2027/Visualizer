import React, { useContext } from 'react'

import { MdOutlinePause } from 'react-icons/md'
import { clearTimeouts } from '../../../helpers/util'
import { store } from '../../../store/store'

import styles from './PauseButton.module.css'

const PauseButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const pausehanlder = () => {
        if(!context.state.isSorting) return
        clearTimeouts(context.state.timers, dispatch)
    }

    return (
        <div onClick={pausehanlder} className={styles.container}>
            <MdOutlinePause />
        </div>
    )
}

export default PauseButton