import React from 'react'

import styles from './ThemeItem.module.css'

const ThemeItem = ({name, fileName, setActiveItem, active, index}) => {

    const setTheme = () => {
        document.getElementById('app').className = `${fileName}-theme`
        setActiveItem(index)
    }

    return (
        <div onClick={setTheme} className={`${styles.container} ${active ? styles.borderActive : ''}`}>
            <div className={`${styles.name} ${active ? styles.nameColor : ''}`} for={name} >{name}</div>
            <div className={`${styles.circle} ${active ? styles.scaleAnimation : ''}`}></div>
            {/* <input type="checkbox" id="cb1" /><label for="cb1">Toggle me</label> */}
        </div>
    )
}

export default ThemeItem