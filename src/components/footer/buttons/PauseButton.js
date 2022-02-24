import React, { useContext } from 'react'

import { MdOutlinePause, MdPlayArrow } from 'react-icons/md'
import { store } from '../../../store/store'

import styles from './PauseButton.module.css'

const PauseButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const pausehanlder = () => {
        for (let i = 0; i < context.state.timers.length; i++)
        clearTimeout(context.state.timers[i])
    }

    return (
        <div onClick={pausehanlder} className={styles.container}>
            {context.state.isSorting ? <MdOutlinePause/> : <MdPlayArrow/>}
        </div>
    )
}

export default PauseButton