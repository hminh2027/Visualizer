import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

import styles from './ThemeDropdown.module.css'
import ThemeList from './ThemeList'

const ThemeDropdown = () => {
    return (
        <div className={styles.container}>
            <button className={styles.create_btn}>
                Themes
                <AiFillCaretDown className={styles.icon} />
            </button>
            <div className={styles.dropdown_content}>
                <ThemeList />
            </div>
        </div>
    )
}

export default ThemeDropdown