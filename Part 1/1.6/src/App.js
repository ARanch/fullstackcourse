import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  
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
    let sum = 0
    history.forEach(value => {sum += value})
    setAverage(sum/history.length)
  }
  
  const addStats = (voteValue) => {
    setHistory(history.concat(voteValue))
    setTotal(total+1)
    calcAvg()
    setPositive(good/total*100)
  }

  const goodVote = () => {
    setGood(good+1)
    addStats(1)
  }
  
  const badVote = () => {
    setBad(bad+1)
    addStats(-1)
  }
  
  const neutralVote = () => {
    setNeutral(neutral+1)
    addStats(0)
  }

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="Good" onClick={() => goodVote()}/>
      <Button text="Neutral" onClick={() => neutralVote()}/>
      <Button text="Bad" onClick={() => badVote()}/>
      <Header text="Statistics"/>
      Good: {good}<br/>
      Neutral: {neutral}<br/>
      Bad: {bad}<br/>
      Total votes: {total}<br/>
      Average score: {average}<br/>
      Amount positive: {positive} %<br/>
      History: {history}
    </div>
  )
}

export default App