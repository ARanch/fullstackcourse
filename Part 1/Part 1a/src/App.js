const Header = (props) => (
  // header component
  <h1>{props.text}</h1>
)

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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header text={course}/>
      <Content part={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]}/>
      {/* <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/> */}
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>      
    </div>
  )
}

export default App