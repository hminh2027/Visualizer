export const addAnimation = (animations, description, action, index, positions) => {
    

    return animations.push({
        description,
        action,
        index,
        positions
    })
}

export const changePosition = (value, toIndex, positions) => {
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
}

export const goUp = (value, positions) => {
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
}