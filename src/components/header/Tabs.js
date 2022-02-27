import React, { useContext } from 'react'
import { clearTimeouts, generateUniqueArray, resetColumns, resetStore } from '../../helpers/util'
import { store } from '../../store/store'

import styles from './Tabs.module.css'

const Tabs = () => {
    const context = useContext(store)
    const { dispatch } = context

    const menuList = ['Bubble Sort',  'Merge Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort', 'Heap Sort', 'Counting Sort']

    const setSortingTab = index => {
        resetColumns()
        clearTimeouts(context.state.timers, dispatch)
        resetStore(dispatch)
        dispatch({ type: 'SET_SORTING_TAB', payload:  index})
        dispatch({ type: 'SET_ARRAY', payload: generateUniqueArray(context.state.length) })
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs_wrapper}>
                {menuList.map((elem, index) => (
                <div onClick={()=>setSortingTab(index)} className={`${styles.tab} ${context.state.sortingTab === index ? styles.active: ''}`} key={index}>
                    {context.state.sortingTab === index ? elem : elem.slice(0,3)}
                </div>
                ))}
            </div>       
        </div>
    )
}

export default Tabs