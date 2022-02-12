import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)
    const menuList = ['Buble Sort,  Selection Sort, Insertion Sort, Merge Sort']

    return (
        <div>
            {menuList.map(e=>(<div>{e}</div>))}
        </div>
    )
}

export default Tabs