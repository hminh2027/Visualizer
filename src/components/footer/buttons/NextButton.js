import React, { useContext } from 'react'

import { MdSkipNext } from 'react-icons/md'
import { transformHandler } from '../../../animations/animationsHandler.js'
import { clearTimeouts } from '../../../helpers/util'
import { store } from '../../../store/store'

import styles from './NextButton.module.css'

const NextButton = () => {
    const context = useContext(store)
    const { dispatch } = context

    const moveAnimation = () => {
        clearTimeouts(context.state.timers, dispatch)
        const i = context.state.lastAnimationIndex + 1
        if(i >= context.state.animations.length) return
        transformHandler(i, context.state.animations[i].positions)

        dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i})
    }
    return (
        <div onClick={moveAnimation} className={styles.container}>
            <MdSkipNext/>
        </div>
    )
}

export default NextButton