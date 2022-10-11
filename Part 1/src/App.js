const Header = (props) => {
  // header component
  console.log(props)
  return <h1>{props.text}</h1>
}

const Content = (props) => (
  // Content component
  // props.map(prop => <Part part={props.part} exercise={props.exercise}/>) // kan man måske gøre det iterativt...?
  <>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}/>
    <Part part={props.parts[2]}/>
  </>
)

const Part = (props) => (
  // Part component
  <div>
    {props.part.name} {props.part.exercises}
  </div>
)

const Total = (props) => (
  // total component
  // <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  <p>
    {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]


  return (
    <div>
      <Header text={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>  
    </div>
  )
}

export default App