export const addAnimation = (animations, positions, description, action, index, color) => {
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

