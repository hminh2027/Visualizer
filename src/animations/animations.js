import { addAnimation } from "../helpers/addAnimation"

export const changeColor = (animations, positions, index, color) => {
    addAnimation(animations, positions, `Change color column: ${index} to ${color}`, 'COLOR', index, color)
}

export const swapPosition = (animations, positions, value, index) => {
    const [firstValue, secondValue] = value
    const [firstIndex, secondIndex] = index

    for (let i = 0; i < positions.length; i++) {
        const lastIndex = positions[i].arr.length - 1

        if (positions[i].value === firstValue) {
            positions[i].arr.push({
                x: positions[secondIndex].arr[lastIndex].x,
                y: 0
            })
        }

        else if (positions[i].value === secondValue) {
            positions[i].arr.push({
                x: positions[firstIndex].arr[lastIndex].x,
                y: 0
            })
        }
        
        else positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })
    }
    addAnimation(animations, positions, `Swap columns have value: ${firstValue}, ${secondValue}`, 'TRANFORM', index)
}

export const addToArray = (animations, positions, value) => {
    for (let i = 0; i < positions.length; i++) {
        
        const lastIndex = positions[i].arr.length - 1

        if (positions[i].value === value){
            positions[i].arr.push({
                x: positions[i].arr[lastIndex].x,
                y: 0
            })
        }
        
        else positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })
    }
    addAnimation(animations, positions, `Add column have value: ${value} back to array`, 'TRANFORM')
}

export const addToQueue = (animations, positions, value, toIndex) => {
    const distancePerBar = positions[1].arr[0].x - positions[0].arr[0].x
    
    for (let i = 0; i < positions.length; i++) {
        const lastIndex = positions[i].arr.length - 1

        if (positions[i].value === value){
            const curIndex = (positions[i].arr[lastIndex].x - positions[0].arr[0].x) / distancePerBar
            const diffIndex = Math.abs(toIndex - curIndex)
            const diffDistance = distancePerBar * diffIndex

            if (curIndex < toIndex) positions[i].arr.push({
                x: positions[i].arr[lastIndex].x + diffDistance,
                y: 100
            })
            else if (curIndex > toIndex) positions[i].arr.push({
                x: positions[i].arr[lastIndex].x - diffDistance,
                y: 100
            })
            else positions[i].arr.push({
                x: positions[i].arr[lastIndex].x,
                y: 100
            })
        }
        
        else positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })
    }
    addAnimation(animations, positions, `Add column have value: ${value} to queue`, 'TRANFORM')
}