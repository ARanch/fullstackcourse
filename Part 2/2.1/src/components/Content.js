import React from 'react'
import Part from './Part'
const Content = ({ parts }) => {
  let sum = 0
  parts.map(part => sum = sum + part.exercises)
  console.log(sum)
  return (
    <div>
      {parts.map(parts => <Part key={parts.id} part={parts.name} exercise={parts.exercises} />)}
      <b>total of {sum} exercises</b>
      {/* <p>Hej content!</p> */}
      {/* <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/> */}
    </div>
  )
}

export default Content