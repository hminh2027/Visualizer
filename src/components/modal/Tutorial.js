import React, { useState } from 'react'

import Logo from '../../assets/Logo.png'
import SortingType from '../../assets/SortingType.jpg'
import TopBar from '../../assets/Topbar.png'
import TimeNSpace from '../../assets/TimeNSpaceComplex.png'
import Slider from '../../assets/Slider1.png'
import AnimationControl from '../../assets/AnimationControl.png'
import Control from '../../assets/Control.png'
import InputArray from '../../assets/InputArray.png'
import Theme from '../../assets/Theme.png'
import SortBtn from '../../assets/SortBtn.png'

import styles from './Tutorial.module.css'

const Tutorial = ({setState}) => {
    const pages = [
        {
            title: 'Welcome to Sorting Visualizer!', 
            description: 'This short tutorial will walk you through all of the features of this application', 
            paragraph: 'If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!', 
            image: Logo
        },
        {
            title: 'What is a sorting algorithm?', 
            description: 'A Sorting Algorithm is used to rearrange a given array or list elements into a specific order', 
            paragraph: 'There are many types of sorting algorithms, and 7 most common algorithms will be used in this application', 
            image: SortingType
        },
        {
            title: 'Meet the algorithms', 
            description: 'Not all algorithms are created equal', 
            paragraph: 'Each algorithm has different time complexity and space complexity. Therefore, depending on different situations, we choose the appropriate algorithm with it', 
            image: TimeNSpace
        },
        {
            title: 'Picking an algorithm', 
            description: 'Choose an algorithm in the topbar', 
            paragraph: 'Pick an algorithm and see how it operates (rearranges) the elements of an array in a visual way', 
            image: TopBar
        },
        {
            title: 'Sort Button', 
            description: 'Sorting Timeee!', 
            paragraph: 'Click "Sort" button to visualise that sorting algorithm', 
            image: SortBtn
        },
        {
            title: 'Freely adjust settings', 
            description: 'Until they are comfortable for you', 
            paragraph: 'Click and drag at the slider to change the size of the array and the speed of the animations', 
            image: Slider
        },
        {
            title: 'Control the animations', 
            description: 'It will help you easily catch up with that algorithm', 
            paragraph: 'Click the "Prev" button (or press LeftArrow key) and "Next" button (or press RightArrow key) to move backward/forward in the sorting animations', 
            image: Control
        },
        {
            title: 'Make thing even easier', 
            description: 'To jump to any position in that algorithm\'s sorting steps', 
            paragraph: 'Click and drag at the slider to change the state of columns (array) to that step of sorting animations', 
            image: AnimationControl
        },
        {
            title: 'Visualise by your own', 
            description: 'Playing around with your custom array list', 
            paragraph: 'Type in your array but follow these rules: Unique (value), 0 < (value) < 50 and maximum size is 20', 
            image: InputArray
        },
        {
            title: 'Change Themes', 
            description: 'Color will help you concentrate more', 
            paragraph: 'I\'ve built 4 themes, and more in the future...', 
            image: Theme
        },
    ]

    const [pageIndex, setPageIndex] = useState(0)

    const changePageIndex = (value) => {
        const index = pageIndex + value
        if (index < 0 || index === pages.length) return
        setPageIndex(pageIndex + value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.page_counter}>
                {pageIndex+1}/{pages.length}
            </div>
            <div className={styles.content}>
                <div className={styles.title}> {pages[pageIndex].title} </div>
                <div className={styles.description}> {pages[pageIndex].description} </div>
                <div className={styles.paragraph}> {pages[pageIndex].paragraph} </div>
                {pages[pageIndex].image && <div className={styles.image_wrapper}>
                    <img className={styles.image} src={pages[pageIndex].image} alt='image' />
                </div>}
            </div>       
            <div className={styles.btn_group}>
                <button className={styles.btn} onClick={()=>setState(false)}>Skip Tutorial</button>
                <div className={styles.change_index_btn_group}>
                    {pageIndex !== 0 && <button className={styles.btn} onClick={()=>changePageIndex(-1)}>Previous</button>}
                    {pageIndex !== pages.length-1 && <button className={styles.btn} onClick={()=>changePageIndex(1)}>Next</button>}
                </div>       
            </div>
        </div>           
    )
}

export default Tutorial