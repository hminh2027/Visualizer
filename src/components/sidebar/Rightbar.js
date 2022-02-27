import React, { useContext, useEffect, useState } from 'react'

import { GoChevronRight } from 'react-icons/go'
import { store } from '../../store/store'

import styles from './RightBar.module.css'

const Rightbar = () => {
    const context = useContext(store)
    const { dispatch } = context
    
    const [animation, setAnimation] = useState({})

    useEffect(()=>{
        const index = context.state.lastAnimationIndex
        setAnimation(context.state.animations[index])

    }, [context.state.lastAnimationIndex])

    const setIsShowDescription = (isShow) => {
        dispatch({ type: 'SET_IS_SHOW_DESCRIPTION', payload: isShow })
    }

    return (
        <div className={styles.container}>
            <div onClick={()=>setIsShowDescription(!context.state.isShowDescription)} className={`${styles.icon_wrapper} ${context.state.isShowDescription ? styles.rotateAnimation : ''}`}>
                <GoChevronRight className={styles.icon}/>
            </div>
            <div className={`${styles.description_wrapper} ${context.state.isShowDescription ? styles.slideLeft : ''}`}>
                <div className={styles.description}>
                    {animation && animation.description}
                </div>
            </div>
        </div>
    )
}

export default Rightbar