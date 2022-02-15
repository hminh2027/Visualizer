import React, { useState } from 'react'
import SortButton from '../SortButton'
import Tabs from '../Tabs'

import styles from './Header.module.css'

const Header = () => {
    

    return (
        <div className={styles.container}>
            Header
            <Tabs/>
            <SortButton/>
        </div>
    )
}

export default Header