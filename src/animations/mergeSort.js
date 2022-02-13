import { getMergeSortAnimations } from "../algorithms"

export const mergeSort = array => {
    let posArray = [
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]}
    ]
    
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    
    for (let i = 0; i < arrayBars.length; i++) {
        const rect = arrayBars[i].getBoundingClientRect()
        posArray[i].arr.push({x: rect.left, y: 0})
        posArray[i].value = +arrayBars[i].textContent
        
    } 

    const {animations, positions} = getMergeSortAnimations(array, posArray)
    console.log(animations)
    console.log(positions)

    for (let i = 0; i < positions[0].arr.length; i++) {
        setTimeout(() => {
            arrayBars[0].style.transform = `translate(${positions[0].arr[i].x - positions[0].arr[0].x}px, ${positions[0].arr[i].y}px)`
            arrayBars[1].style.transform = `translate(${positions[1].arr[i].x - positions[1].arr[0].x}px, ${positions[1].arr[i].y}px)`
            arrayBars[2].style.transform = `translate(${positions[2].arr[i].x - positions[2].arr[0].x}px, ${positions[2].arr[i].y}px)`
            arrayBars[3].style.transform = `translate(${positions[3].arr[i].x - positions[3].arr[0].x}px, ${positions[3].arr[i].y}px)`
            arrayBars[4].style.transform = `translate(${positions[4].arr[i].x - positions[4].arr[0].x}px, ${positions[4].arr[i].y}px)`

        }, i * 300)
    }
}