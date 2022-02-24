import React, { useState } from 'react'
import ThemeItem from './ThemeItem'

const ThemeList = () => {
    const themesList = [
        {name: 'Black n White',fileName: 'blacknwhite', icon: null},
        {name: 'Sweet Candy',fileName: 'sweet', icon: null},
        {name: 'X-Mas',fileName: 'christmas', icon: null},
        {name: 'Dark Mode',fileName: 'darkmode', icon: null}
    ]

    const [activeItem, setActiveItem] = useState(0)

    return (
        <>
            {themesList.map((theme, index) => (
                <ThemeItem key={index} index={index} setActiveItem={setActiveItem} active={activeItem == index ? true : false} name={theme.name} fileName={theme.fileName} icon={theme.icon} />
            ))}
        </>
    )
}

export default ThemeList