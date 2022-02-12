import React, { useState } from 'react'
import Tabs from './Tabs'

import styles from './Header.module.css'

const Header = () => {
    

    return (
        <div className={styles.container}>
            Header
            <Tabs/>
        </div>
    )
}

export default Header