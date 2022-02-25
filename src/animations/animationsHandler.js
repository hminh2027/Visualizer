export const animationsHandler = (animations, index, dispatch, speed) => {
    dispatch({ type: 'SET_IS_SORTING', payload: true })
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

    const timers = []
    let idx = index || 1
    let delay = 0

    for (let i = idx; i <= animations.length; i++) {
        if(i === animations.length) {
            timers.push(
                window.setTimeout(() => {
                    console.log('reset')
                    dispatch({ type: 'SET_IS_SORTING', payload: false })
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: -1 })
                }, delay * speed))
            break
        }
        switch(animations[i].action) {
            // case 'COLOR':
            //     const idx1 = animations[i].index
            //     const idx2 = animations[i].index2

            //     timers.push(
            //     setTimeout(() => {
            //         for (let j = 0; j < animations[i].positions.length; j++) {
            //             arrayBars[j].classList.remove('color')
            //         }
            //         arrayBars[idx1].classList.add('color')
            //         arrayBars[idx2].classList.add('color')
            //         dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            //         delay++
            //     }, delay * speed))
            //     break
            
            case 'TRANFORM':
                timers.push(
                setTimeout(() => {
                    for (let j = 0; j < animations[i].positions.length; j++) {
                        arrayBars[j].style.transform = `translate(
                            ${animations[i].positions[j].arr[i].x - animations[i].positions[j].arr[0].x}px,
                            ${animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
                        )`
                    }
                    
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
                    delay++
                }, delay * speed))
                break
                
            default:
                break
        }
        delay++
    }
    return timers
}

export const animationHandler = (animationIndex, animations, dispatch) => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]
    const i = animationIndex
    switch(animations[i].action) {
        case 'COLOR':
            const idx = animations[i].index

                arrayBars[idx].style.backgroundColor = animations[i].color
                // arrayBars[two].style.backgroundColor = animations[i].color
                dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            break
        
        case 'TRANFORM':
                for (let j = 0; j < animations[i].positions.length; j++) {
                    arrayBars[j].style.transform = `translate(
                        ${animations[i].positions[j].arr[i].x - animations[i].positions[j].arr[0].x}px,
                        ${animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
                    )`
                }
                dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            break
            
        default:
            break
    }
}