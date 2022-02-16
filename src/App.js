import Visualizer from './components/Visualizer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import { StateProvider } from './store/store'

function App() {

return (
  <StateProvider>
    <Header/>
    <Visualizer/>
    {/* <Footer/> */}
  </StateProvider>
)}

export default App
