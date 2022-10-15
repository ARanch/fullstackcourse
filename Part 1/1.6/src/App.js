import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatsSection = ({good, neutral, bad, total, average, positive, history}) => (
  <>
    Good: {good}<br/>
    Neutral: {neutral}<br/>
    Bad: {bad}<br/>
    Total votes: {total}<br/>
    Average score: {average}<br/>
    Amount positive: {positive} %<br/>
    History: {history}
  </>
)

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
  const [statsSection, setStatsSection] = useState(<p>No statistics yet.</p>)

  const calcAvg = () => {
    console.log('calculating averages')
    let sum = 0
    history.forEach(value => {sum += value})
    setAverage(sum/history.length)
  }
  
  const addStats = (voteValue) => {
    console.log('Adding statistics')
    setHistory(history.concat(voteValue))
    setTotal(total+1)
    calcAvg()
    setPositive(good/total*100)
    setStatsSection(<StatsSection good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} history={history}/>)
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
    setNeutral(neutral+1)
    console.log('neutral vote cast')
    setTimeout(() => {
      addStats(0)
    },1000)
  }

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="Good" onClick={() => goodVote()}/>
      <Button text="Neutral" onClick={() => neutralVote()}/>
      <Button text="Bad" onClick={() => badVote()}/>
      <Header text="Statistics"/>
      {statsSection}
    </div>
  )
}

export default App