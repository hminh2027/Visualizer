import Visualizer from './components/Visualizer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import { StateProvider } from './store/store'

import './themes/themes.css'

function App() {
    
    
    return (
        <StateProvider>
            <div id='app' style={{width: '100%', height: '100%'}} className='blacknwhite-theme'>
                <Header/>
                <Visualizer/>
                <Footer/>
            </div>
        </StateProvider>
    )}

export default App
