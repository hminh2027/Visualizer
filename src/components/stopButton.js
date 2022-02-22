import React from 'react'

const stopButton = () => {
    const stopHandler = () => {
        //dispatch({ type: 'SET_IS_SORTING', payload: false })
        for (let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i])
        }
        console.log(context.state.lastAnimationIndex)
    }

    return (
        <button onClick={stopHandler}>Stop</button>
    )
}

export default stopButton