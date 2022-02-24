import React from 'react'

import PauseButton from './buttons/PauseButton'

import styles from './AnimationControls.module.css'
import PrevButton from './buttons/PrevButton'
import NextButton from './buttons/NextButton'

const AnimationControls = () => {
    return (
        <div className={styles.container}>
            <PrevButton/>
            <PauseButton/>
            <NextButton/>
        </div>
    )
}

export default AnimationControls