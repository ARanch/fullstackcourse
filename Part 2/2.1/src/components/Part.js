import React from 'react'
const Part = (props) => (
    // Part component
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  )

export default Part
