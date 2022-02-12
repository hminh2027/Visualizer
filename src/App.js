import Visualizer from './components/Visualizer'
import Header from './components/Header'

import { StateProvider } from './store/store'

function App() {

return (
  <StateProvider>
    <Header/>
    <Visualizer/>
  </StateProvider>
)}

export default App
