export const addAnimation = (animations, description, action, index) => {
    return animations.push({
        description,
        action,
        index
    })
}