import React from 'react'

import styles from './Modal.module.css'

const Modal = (props) => {

    return (
        <>
            <div className={styles.backdrop}></div>
            <div style={{width: props.width, height: props.height}} className={styles.modal}>
                {props.children}
            </div>
        </>
    )
}

export default Modal