export const addAnimation = (animations, positions, description, action, index) => {
    return animations.push({
        description,
        positions,
        action,
        index
    })
}

