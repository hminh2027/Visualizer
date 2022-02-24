import React, { useContext } from 'react'

import { MdOutlinePause } from 'react-icons/md'
import { store } from '../../../store/store'

import styles from './PauseButton.module.css'

const PauseButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const pausehanlder = () => {
        for (let i = 0; i < context.state.timers.length; i++)
        window.clearTimeout(context.state.timers[i])
    }

    return (
        <div onClick={pausehanlder} className={styles.container}>
            <MdOutlinePause/>
        </div>
    )
}

export default PauseButton