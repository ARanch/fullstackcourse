import React from 'react'
import Part from './Part'
const Content = ({ parts }) => {
  const sum = parts.reduce((sum, part) => {
    console.log('Sum of exercises: ', sum, 'Current part is: ', part.exercises)
    return sum + part.exercises
  }, 0
  )
  console.log(sum)
  return (
    <div>
      {parts.map(parts => <Part key={parts.id} part={parts.name} exercise={parts.exercises} />)}
      <b>total of {sum} exercises</b>
    </div>
  )
}

export default Content