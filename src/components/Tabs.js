import React, { useContext } from 'react'
import { generateUniqueArray, resetColumns } from '../helpers/util'
import { store } from '../store/store'


import styles from './Tabs.module.css'

const Tabs = () => {
    const context = useContext(store)
    const { dispatch } = context

    const menuList = ['Bubble Sort',  'Merge Sort', 'Selection Sort']

    const setSortingTab = index => {
        dispatch({ type: 'SET_SORTING_TAB', payload:  index})
        dispatch({ type: 'UPDATE_ARRAY', payload: generateUniqueArray(10) })
        resetColumns()
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs_wrapper}>
                {menuList.map((elem, index) => (
                <div onClick={()=>setSortingTab(index)} className={`${styles.tab} ${context.state.sortingTab === index ? styles.active: ''}`} key={index}>
                    {elem}
                </div>
                ))}
            </div>       
        </div>
    )
}

export default Tabs