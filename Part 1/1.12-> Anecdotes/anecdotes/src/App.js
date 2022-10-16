import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.', 
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  let votearray = [] 
  let maxVotes = 0
  let maxIndex = Math.max(...votes)
  maxIndex = votes.indexOf(maxIndex)

  const selectAnecdote = () => {
    let rnd = getRandomInt(0, anecdotes.length-1)
    console.log('Random number was: ', rnd)
    setSelected(rnd)
  }
 
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const voteAnecdote = () => {
    
    const newVotes = [...votes]
    console.log(newVotes, 'new votes array')
    newVotes[selected] = newVotes[selected]+1
    console.log(newVotes, 'with added vote')
    // let currentVotes = anecdotes[selected].votes[0]
    // let setVoteState = anecdotes[selected].votes[1]
    setVotes(newVotes)
  }

  useEffect(() => {
    console.log('Max index: ', maxIndex)
    console.log('max indexed anecdote: ',votes[maxIndex])
  })

  return (
    <div>
      <button onClick={() => selectAnecdote()}>Next anecdote</button>
      <button onClick={() => voteAnecdote()}>Vote</button>
      <br/>
      <h2>{anecdotes[selected]}</h2> <br/>
      Votes cast for this anecdote: {votes[selected]} <br/>
      Anecdote with most votes ({votes[maxIndex]}):
      <h3>{anecdotes[maxIndex]}</h3>
    </div>
  )
}

export default App