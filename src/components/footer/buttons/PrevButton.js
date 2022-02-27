import React, { useContext } from 'react'

import { MdSkipPrevious } from 'react-icons/md'
import { animationHandler } from '../../../animations/animationsHandler.js'
import { clearTimeouts } from '../../../helpers/util'
import { store } from '../../../store/store'

import styles from './PrevButton.module.css'

const PrevButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const moveAnimation = () => {
        clearTimeouts(context.state.timers, dispatch)
        const i = context.state.lastAnimationIndex - 1
        if(i < 0) return
        animationHandler(i, context.state.animations, dispatch)
        dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i})
    }
    return (
        <div onClick={moveAnimation} className={styles.container}>
            <MdSkipPrevious/>
        </div>
    )
}

export default PrevButton