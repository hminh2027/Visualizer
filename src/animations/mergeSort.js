import { getMergeSortAnimations } from "../algorithms"

export const mergeSort = array => {
    const animations = getMergeSortAnimations(array)

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
        
        switch(animations[i].action) {
            case 'DROPDOWN':
                const [barOneIdx] = animations[i].index
                const barOneStyle = arrayBars[barOneIdx].style

                setTimeout(() => {
                    barOneStyle.transform = 'translateY(50px)'
                }, i * 300)
                break

            case 'COMPARE':
                const [barOneIdxe, barTwoIdxe] = animations[i].index
                const barOneStylee = arrayBars[barOneIdxe].style
                const barTwoStylee = arrayBars[barTwoIdxe].style
        
                setTimeout(() => {
                    barOneStylee.backgroundColor = 'red'
                    barTwoStylee.backgroundColor = 'red'
                }, i * 300)
                break
            
            case 'REVERT':
                const [barOneIdxee, barTwoIdxee] = animations[i].index
                const barOneStyleee = arrayBars[barOneIdxee].style
                const barTwoStyleee = arrayBars[barTwoIdxee].style
        
                setTimeout(() => {
                    barOneStyleee.backgroundColor = 'red'
                    barTwoStyleee.backgroundColor = 'red'
                    barOneStyleee.transform = 'translateY(0px)'
                    barTwoStyleee.transform = 'translateY(0px)'
                }, i * 300)
                break

            case 'OVERWRITE':
                setTimeout(() => {
                    const [barOneIdxeee, newHeight] = animations[i].index
                    const barOneStyleeee = arrayBars[barOneIdxeee].style
                    barOneStyleeee.height = `${newHeight/10}%`
                }, i * 300)
                break
            
            default:
                break
        }
    }
  }