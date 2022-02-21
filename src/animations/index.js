export const animationsHandler = (animations, index, dispatch) => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const timeouts = []
    let idx = index || 0

    console.log(animations)
    console.log(idx)

    for (let i = idx; i < animations.length; i++) {
        console.log(animations[i].description)
        switch(animations[i].action) {
            case 'COLOR':
                const [one, two] = animations[i].index
                
                setTimeout(() => {
                    arrayBars[one].style.backgroundColor = animations[i].color
                    arrayBars[two].style.backgroundColor = animations[i].color
                }, i * 100)
                break
            
            case 'TRANFORM':
                timeouts.push(
                setTimeout(() => {
                    for (let j = 0; j < animations[i].positions.length; j++) {
                        console.log('bar '+ j + ' set value: ' + (animations[i].positions[j].arr[i + 1].x - animations[i].positions[j].arr[0].x))
                        arrayBars[j].style.transform = `translate(${animations[i].positions[j].arr[i + 1].x - animations[i].positions[j].arr[0].x}px, ${animations[i].positions[j].arr[i  + 1 ].y}px)`
                    }
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i == animations.length - 1 ? 0 : i + 1 })
                }, i * 1000))
                break
                
            default:
                break
        }
    }
    return timeouts
}