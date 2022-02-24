import React from 'react'

import styles from './ThemeItem.module.css'

const ThemeItem = ({name, fileName, setActiveItem, active, index}) => {

    const setTheme = () => {
        document.getElementById('app').className = `${fileName}-theme`
        setActiveItem(index)
    }

    return (
        <div onClick={setTheme} className={`${styles.container} ${active ? styles.borderActive : ''}`}>
            <div className={`${styles.name} ${active ? styles.nameColor : ''}`}>{name}</div>
            <div className={`${styles.circle} ${active ? styles.scaleAnimation : ''}`}></div>
        </div>
    )
}

export default ThemeItem