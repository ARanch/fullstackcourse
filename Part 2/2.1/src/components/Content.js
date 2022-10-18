import React from 'react'
import Part from './Part'
const Content = ({parts}) => (
    // Content component
    <>
      {parts.map(parts => <Part key={parts.id} part={parts.name} exercise={parts.exercises}/>)}
      {/* <p>Hej content!</p> */}
      {/* <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/> */}
    </>
  )
  
export default Content