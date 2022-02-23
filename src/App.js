import Visualizer from './components/Visualizer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import { StateProvider } from './store/store'
import ThemeProvider from './helpers/ThemeProvider'

// import './variables.css'
function App() {
    
return (
    <StateProvider>
        <ThemeProvider>
            <Header/>
            <Visualizer/>
            <Footer/>
        </ThemeProvider>       
    </StateProvider>
)}

export default App
