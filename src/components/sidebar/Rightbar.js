import React, { useContext, useEffect, useState } from 'react'

import { GoChevronRight } from 'react-icons/go'
import { store } from '../../store/store'

import styles from './RightBar.module.css'

const Rightbar = () => {
    const context = useContext(store)

    useEffect(()=>{
        const index = context.state.lastAnimationIndex
        setAnimation(context.state.animations[index])

    }, [context.state.lastAnimationIndex])

    const [animation, setAnimation] = useState({})
    const [isShowDescription, setIsShowDescription] = useState(false)

    return (
        <div className={styles.container}>
            <div onClick={()=>setIsShowDescription(!isShowDescription)} className={`${styles.icon_wrapper} ${isShowDescription ? styles.rotateAnimation : ''}`}>
                <GoChevronRight className={styles.icon}/>
            </div>
            <div className={`${styles.description_wrapper} ${isShowDescription ? styles.slideLeft : ''}`}>
                <div className={styles.description}>
                    {animation && animation.description}
                </div>
            </div>
        </div>
    )
}

export default Rightbar