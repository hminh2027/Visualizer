import React, { useContext, useEffect } from 'react'
import { generateUniqueArray } from '../helpers/util'
import { store } from '../store/store'
import Rightbar from './sidebar/Rightbar'

import './Colors.css'
import './Visualizer.css'

const Visualizer = () => {
    const context = useContext(store)
    const { dispatch } = context

    const barsWrapper = document.getElementsByClassName('bars_wrapper')[0]

    useEffect(()=>{
        dispatch({ type: 'SET_ARRAY', payload: generateUniqueArray(10) })

    }, [context.length, dispatch])
    

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
        </div>
        
    )
}

export default Visualizer