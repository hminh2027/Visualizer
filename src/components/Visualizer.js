import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { generateUniqueArray } from '../helpers/util'
import { store } from '../store/store'
import Rightbar from './sidebar/Rightbar'
import Modal from './utils/Modal'
import Tutorial from './modal/Tutorial'

import './Colors.css'
import './Visualizer.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    const modal = document.getElementById('modal')
    const barsWrapper = document.getElementsByClassName('bars_wrapper')[0]

    useEffect(()=>{
        dispatch({ type: 'SET_ARRAY', payload: generateUniqueArray(10) })

    }, [context.length, dispatch])

    const [isShowTutorial, setIsShowTutorial] = useState(true)
    

    return (
        <div className='container'>
            <div className='left_bar'></div>
            <div className='middle_bar'>
                <div className='bars_wrapper'>
                    {context.state.length > 0 && context.state.array.map((value, index) => (
                        <div style={{height: `${value}%`, transform: `translate(0, -${barsWrapper.offsetHeight / 2}px)`}} className='bar' key={index}>
                            {value}
                        </div>
                    ))}
                </div>          
            </div>
            <div className='right_bar'><Rightbar /></div>

            {isShowTutorial && ReactDOM.createPortal(
            <Modal setIsEdit={setIsShowTutorial} width={'50%'} height={'70%'} >
                <Tutorial setState={setIsShowTutorial} />
            </Modal>
            , modal)}
        </div>
        
    )
}

export default Visualizer