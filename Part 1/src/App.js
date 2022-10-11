const Header = (props) => {
  // header component
  console.log(props)
  return <h1>{props.text}</h1>
}

const Content = (props) => (
  // Content component
  <>
    <Part part={props.part[0]} exercise={props.exercise[0]}/>
    <Part part={props.part[1]} exercise={props.exercise[1]}/>
    <Part part={props.part[2]} exercise={props.exercise[2]}/>
  </>
)

const Part = (props) => (
  // Part component
  <div>
    {props.part} {props.exercise}
  </div>
)

const Total = (props) => (
  // total component
  <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  // refactor
  const part1 = { //object instead
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = { //object instead
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = { //object instead
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header text={course}/>
      <Content part={[part1.name, part2.name, part3.name]} exercise={[part1.exercises, part2.exercises2, part3.exercises]}/>
      {/* <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/> */}
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>  
    </div>
  )
}

export default App