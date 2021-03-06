import React, { useContext, useState } from 'react'

import {AiFillCaretDown} from 'react-icons/ai'
import { clearTimeouts, generateUniqueArray, resetColumns, resetStore } from '../../helpers/util'
import { store } from '../../store/store'

import styles from './CreateDropdown.module.css'

const CreateDropdown = () => {
    const context = useContext(store)
    const { dispatch } = context

    const [arrayString, setArrayString] = useState('')
    const [error, setError] = useState('')

    const goButtonHandler = () => {
        const rs = arrayStringHandler(arrayString)

        if (!rs.error) {
            setError('')
            clearTimeouts(context.state.timers, dispatch)
            resetColumns()
            resetStore(dispatch)
            dispatch({ type: 'SET_ARRAY', payload: rs.array })
            
        }
        else setError(rs.error)
    }

    const randomButtonHandler = () => {
        clearTimeouts(context.state.timers, dispatch)
        resetColumns()
        resetStore(dispatch)
        dispatch({ type: 'SET_ARRAY', payload: generateUniqueArray(context.state.length) })
    }

    const arrayStringHandler = (arrayString) => {
        if(!arrayString) return
        let error, array = []

        const tempArray = arrayString.split(',').map(n=>n.trim())

        if((new Set(tempArray)).size !== tempArray.length) error = `Values must not be duplicated` 
        
        tempArray.map(n=>{
            if(isNaN(n)) error = `${n}: Value is not a valid number`         
            if(n < 1 || n > 49) error = `${n}: Value must be between 1 and 49 (Not exclusive)`
            
            array.push(+n)
        })

        return {array, error}
    }
    return (
        <div className={styles.container}>
            <button className={styles.create_btn}>
                Create Array
                <AiFillCaretDown className={styles.icon} />
            </button>
            <div className={styles.dropdown_content}>
                <div className={styles.dropdown_item}>
                    <button className={styles.dropdown_btn}>Input Array</button>
                    <div className={styles.input_array_wrapper}>
                        <input value={arrayString} onChange={e=>setArrayString(e.target.value)} type="text" className={styles.input_array} />
                        <button onClick={goButtonHandler} className={styles.go_btn}> Go</button>
                        {error && <div className={styles.error}>{error}</div>}
                    </div>
                </div>
                <div className={styles.dropdown_item}>
                    <button onClick={randomButtonHandler} className={styles.dropdown_btn}>Random</button>
                </div>
            </div>
        </div>
    )
}

export default CreateDropdown