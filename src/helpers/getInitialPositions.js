export const getInitialPositions = () => {
    let positions = []
    
    const arrayBars = document.getElementsByClassName('bar')

    for (let i = 0; i < arrayBars.length; i++) {
        // Initiate array
        positions.push({value: 0, arr:[], colors: []})

        // Push X and Y coordinates to array
        const rect = arrayBars[i].getBoundingClientRect()
        positions[i].arr.push({x: rect.left, y: 0})
        positions[i].value = +arrayBars[i].textContent
        // Push initial color (default)
        positions[i].colors.push(0)

    }

    return positions
}