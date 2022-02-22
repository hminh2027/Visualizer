import React from 'react'
import SizeBar from '../footer/SizeSlider'
import SpeedBar from '../footer/SpeedSlider'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SizeBar/>
                <SpeedBar/>
            </div>         
        </div>
    )
}

export default Footer