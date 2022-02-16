export const getInitialPositions = () => {
    let positions = []
    
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')

    for (let i = 0; i < arrayBars.length; i++) {
        // Initiate array
        positions.push({value: 0, arr:[]})

        // Push X and Y coordinates to array
        const rect = arrayBars[i].getBoundingClientRect()
        positions[i].arr.push({x: rect.left, y: 0})
        positions[i].value = +arrayBars[i].textContent
    }

    return positions
}