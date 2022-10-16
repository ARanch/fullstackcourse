import { useEffect, useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </tr>
  )
}

const StatsSection = (props) => {
  useEffect(() => {
    console.log('effect in statssection fired')
  })
    if (props.history.length === 0) {
    return (
      <p>No votes cast yet</p>
      )
    } 
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good: " value={props.good}/>
          <StatisticsLine text="Neutral: " value={props.neutral}/>
          <StatisticsLine text="Bad: " value={props.bad}/>
          <StatisticsLine text="Total: " value={props.total}/>
          <StatisticsLine text="Average Score: " value={props.average}/>
          {/* <StatisticsLine text="Amount Positive: " value={props.positive}/> */}
        </tbody>
      </table>
  )
}

// total number
// avg score
// amount positive

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [history, setHistory] = useState([])
  const [average, setAverage] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const calcAvg = () => {
    console.log('calculating averages')
    let sum = 0
    let avg = sum/history.length
    history.forEach(value => {sum += value})
    console.log('sum is: ', sum)
    console.log('history.length is: ', history.length)
    console.log('avg is: ', avg)
    if(isNaN(avg)) {
      console.log('setting avg to 0, because NaN')
      avg = 0
    }
    console.log('avg is: ', avg)
    console.log('sum/length is: ', avg)
    setAverage(avg)
    return avg
  }
  
  const addStats = (voteValue) => {
    setHistory(history.concat(voteValue), console.log('concat ', voteValue,' to history: ', history))
    setTotal(total+1)
  }
  
  const goodVote = () => {
    console.log('good vote cast')
    setGood(good+1)
    addStats(1)
  }
  
  const badVote = () => {
    console.log('bad vote cast')
    setBad(bad+1)
    addStats(-1)
  }
  
  const neutralVote = () => {
    console.log('neutral vote cast')
    setNeutral(neutral+1)
    addStats(0)
  }
  
  useEffect(() => {
    let a = calcAvg()
    console.log('A is: ', a)
    setPositive(good/total*100)
  })
  
  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="Good" onClick={() => goodVote()}/>
      <Button text="Neutral" onClick={() => neutralVote()}/>
      <Button text="Bad" onClick={() => badVote()}/>
      <Header text="Statistics"/>
      <StatsSection good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} history={history}/>
    </div>
  )
}

export default App