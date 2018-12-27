import '../scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (<h1> This is my React app! </h1>)
}
const appDiv = document.getElementById("app")

ReactDOM.render(<App />, appDiv)
