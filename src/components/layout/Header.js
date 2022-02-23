import React from 'react'
import CreateDropdown from '../header/CreateDropdown'
import SortButton from '../header/SortButton'
import Tabs from '../header/Tabs'
import ThemeDropdown from '../header/ThemeDropdown'

import styles from './Header.module.css'

const Header = () => {
    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <CreateDropdown/>
                <Tabs/>
                <SortButton/>
                <ThemeDropdown/>
            </div>
        </div>
    )
}

export default Header