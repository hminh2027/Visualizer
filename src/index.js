import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

document.addEventListener("keydown", e => {
  try {
    switch (e.key) {
      case 'ArrowLeft':
        document.getElementById('prev-btn').click()
        break
      case 'ArrowRight':
        document.getElementById('next-btn').click()
        break
      case ' ':
        document.getElementById('play-btn').click()
        break
      default:
        break
    }
  } catch (e) {}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
