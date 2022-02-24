import React from 'react'
import AnimationControls from '../footer/AnimationControls'
import ProcessSlider from '../footer/sliders/ProcessSlider'
import SizeSlider from '../footer/sliders/SizeSlider'
import SpeedSlider from '../footer/sliders/SpeedSlider'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.sliders_wrapper}>
                    <SizeSlider/>
                    <SpeedSlider/>
                </div>       
                <AnimationControls/>
                <ProcessSlider/>
            </div>         
        </div>
    )
}

export default Footer