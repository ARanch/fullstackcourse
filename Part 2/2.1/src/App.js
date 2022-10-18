import Course from './components/Course'
// already did this

const Total = (props) => (
  // total component
  // <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  <p>
    {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
)

const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Introduction to Awesomeness',
          exercises: 10,
        id: 4,
      },
      {
        name: 'Introduction to Awesomeness Two: Advanced Awesomeness',
          exercises: 14,
        id: 5,
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]


  return (
    <div>
      <Course course={course[0]} />
      <Course course={course[1]} />
    </div>
  )
}

export default App