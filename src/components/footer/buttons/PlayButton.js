import React, { useContext } from 'react'

import { MdPlayArrow } from 'react-icons/md'
import { animationsHandler } from '../../../animations/animationsHandler.js'
import { store } from '../../../store/store'

import styles from './PauseButton.module.css'

const PlayButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const playHandler = () => {
        if(context.state.isSorting || context.state.animations.length === 0) return
        const timers = animationsHandler(context.state.animations, context.state.lastAnimationIndex + 1, dispatch, context.state.speed)
        dispatch({ type: 'SET_TIMERS', payload: timers })
    }

    return (
        <div onClick={playHandler} className={styles.container}>
            <MdPlayArrow />
        </div>
    )
}

export default PlayButton