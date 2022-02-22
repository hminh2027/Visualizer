import React, { useState } from 'react'
import CreateButton from '../header/CreateButton'
import SortButton from '../header/SortButton'
import Tabs from '../header/Tabs'

import styles from './Header.module.css'

const Header = () => {
    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <CreateButton/>
                <Tabs/>
                <SortButton/>
            </div>
        </div>
    )
}

export default Header