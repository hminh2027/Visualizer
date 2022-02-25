import React, { useContext } from 'react'

import PauseButton from './buttons/PauseButton'
import PrevButton from './buttons/PrevButton'
import NextButton from './buttons/NextButton'
import PlayButton from './buttons/PlayButton'

import { store } from '../../store/store'

import styles from './AnimationControls.module.css'

const AnimationControls = () => {
    const context = useContext(store)
    
    return (
        <div className={styles.container}>
            <PrevButton/>
            {context.state.isSorting ? <PauseButton/> : <PlayButton/>}
            <NextButton/>
        </div>
    )
}

export default AnimationControls