export const getInitialPositions = () => {
    let positions = [
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]}
    ]
    
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    
    for (let i = 0; i < arrayBars.length; i++) {
        const rect = arrayBars[i].getBoundingClientRect()
        positions[i].arr.push({x: rect.left, y: 0})
        positions[i].value = +arrayBars[i].textContent
    }

    return positions
}