import React from 'react'
import ReactDOM from 'react-dom'

const Hello =({name, age, gender}) => {
  return (
  <div> 
    <p> {name} is a great personality . He is {age} year's old now only .{gender} is my gender</p>
  </div>
)
}
const App =() => {
  return (
    <div> 
<h1> Cheers </h1>
   <Hello name="Ashray" age={20} gender="mard" />
    </div>
  )
}

 
ReactDOM.render(<App /> , document.getElementById('root'))