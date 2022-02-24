import React from 'react'

import PauseButton from './buttons/PauseButton'

import styles from './AnimationControls.module.css'
import PrevButton from './buttons/PrevButton'
import NextButton from './buttons/NextButton'

const AnimationControls = () => {
    return (
        <div className={styles.container}>
            <div className={styles.prev_btn}>
                <PrevButton/>
            </div>
            <div className={styles.pause_btn}>
                <PauseButton/>
            </div>
            <div className={styles.next_btn}>
                <NextButton/>
            </div>
        </div>
    )
}

export default AnimationControls