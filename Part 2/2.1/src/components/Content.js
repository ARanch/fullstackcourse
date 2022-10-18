import React from 'react'
import Part from './Part'
const Content = (props) => (
    // Content component
    // props.map(prop => <Part part={props.part} exercise={props.exercise}/>) // kan man måske gøre det iterativt...?
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </>
  )
  
export default Content