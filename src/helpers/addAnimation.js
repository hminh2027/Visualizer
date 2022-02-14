const addAnimation = (animations, positions, description, action, index, color) => {
    if (color) {
        for (let i = 0; i < positions.length; i++) {  
            const lastIndex = positions[i].arr.length - 1
            
            positions[i].arr.push({
                x: positions[i].arr[lastIndex].x,
                y: positions[i].arr[lastIndex].y
            })
        }
    }

    return animations.push({
        description,
        positions,
        action,
        index,
        color
    })
}

export const changeColor = (animations, positions, index, color) => {
    addAnimation(animations, positions, `Change color column: ${index} to ${color}`, 'COLOR', index, color)
}

export const swapPosition = () => {}

export const addToArray = (animations, positions, value) => {
    addAnimation(animations, positions, `Add column have value: ${value} back to array`, 'TRANFORM')

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
    return positions
}

export const addToQueue = (animations, positions, value, toIndex) => {
    addAnimation(animations, positions, `Add column have value: ${value} to queue`, 'TRANFORM')

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

    return positions
}