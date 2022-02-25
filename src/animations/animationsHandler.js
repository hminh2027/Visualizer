

export const animationsHandler = (animations, index, dispatch, speed) => {
    dispatch({ type: 'SET_IS_SORTING', payload: true })

    const timers = []
    let idx = index || 1
    let delay = 0

    for (let i = idx; i <= animations.length; i++) {
        if(i === animations.length) {
            timers.push(
                window.setTimeout(() => {
                    console.log('reset')
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: -1 })
                }, delay * speed))
            break
        }
        switch(animations[i].action) {
            // case 'COLOR':
            //     const [one, two] = animations[i].index
                
            //     setTimeout(() => {
            //         arrayBars[one].style.backgroundColor = animations[i].color
            //         arrayBars[two].style.backgroundColor = animations[i].color
            //     }, i * speed)
            //     break
            
            case 'TRANFORM':
                timers.push(
                setTimeout(() => {
                    transformHandler(i, animations[i].positions)
                    console.log('done at: '+i)
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

export const transformHandler = (i, positions) => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

    for (let j = 0; j < positions.length; j++) {
        arrayBars[j].style.transform = `translate(
            ${positions[j].arr[i].x - positions[j].arr[0].x}px,
            ${positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
        )`
    }
}