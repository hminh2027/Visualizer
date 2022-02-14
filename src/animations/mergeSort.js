import { getBubbleSortAnimation, getMergeSortAnimations } from "../algorithms"

export const mergeSort = array => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')

    const animations = getBubbleSortAnimation(array)
    console.log(animations)

    for (let i = 0; i < animations.length; i++) {
        switch(animations[i].action) {
            case 'COLOR':
                const [one, two] = animations[i].index
                
                setTimeout(() => {
                    arrayBars[one].style.backgroundColor = animations[i].color
                    arrayBars[two].style.backgroundColor = animations[i].color
                }, i * 3000)
                break
            
            case 'TRANFORM':
                setTimeout(() => {
                    for (let j = 0; j < animations[i].positions.length; j++) {
                        arrayBars[j].style.transform = `translate(${animations[i].positions[j].arr[i + 1].x - animations[i].positions[j].arr[0].x}px, ${animations[i].positions[j].arr[i  + 1 ].y}px)`
                    }  
                }, i * 300)
                break
                
            default:
                break
        } 
    }
}