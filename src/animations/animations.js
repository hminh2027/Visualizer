import { addAnimation } from "../helpers/addAnimation"

export const changeColor = (animations, positions, description, value, colorValue) => {
    for (let i = 0; i < positions.length; i++) {
        const lastIndex = positions[i].arr.length - 1

        if (positions[i].value === value[0] || positions[i].value === value[1]) 
            positions[i].colors.push(colorValue)       
        else
            positions[i].colors.push(0)

        positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })

    }
    addAnimation(animations, positions, description)
}

export const revertColor = (animations, positions, description) => {
    for (let i = 0; i < positions.length; i++) {
        const lastIndex = positions[i].arr.length - 1

        positions[i].colors.push(0)

        positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })
    }
    addAnimation(animations, positions, description)
}

export const swapPosition = (animations, positions, description, value, index) => {
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

        positions[i].colors.push(positions[i].colors[lastIndex])
    }
    addAnimation(animations, positions, description)
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

        positions[i].colors.push(positions[i].colors[lastIndex])
    }
    addAnimation(animations, positions, `Add column have value: ${value} back to array`)
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
                y: 1
            })
            else if (curIndex > toIndex) positions[i].arr.push({
                x: positions[i].arr[lastIndex].x - diffDistance,
                y: 1
            })
            else positions[i].arr.push({
                x: positions[i].arr[lastIndex].x,
                y: 1
            })
        }
        
        else positions[i].arr.push({
            x: positions[i].arr[lastIndex].x,
            y: positions[i].arr[lastIndex].y
        })

        positions[i].colors.push(positions[i].colors[lastIndex])
    }
    addAnimation(animations, positions, `Add column have value: ${value} to queue`)
}