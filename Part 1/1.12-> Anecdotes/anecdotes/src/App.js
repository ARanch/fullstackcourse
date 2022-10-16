import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    {
      anecdote: 'If it hurts, do it more often.', 
      votes: useState(0)
    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: useState(0)
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: useState(0)
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: useState(0)
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      votes: useState(0)
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: useState(0)
    },
    {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: useState(0)
    }
  ]
   
  const [selected, setSelected] = useState(0)

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
    let currentVotes = anecdotes[selected].votes[0]
    let setVoteState = anecdotes[selected].votes[1]
    setVoteState(currentVotes+1)
  }

  useEffect(() => {
    console.log('effect fired')
  })

  return (
    <div>
      <button onClick={() => selectAnecdote()}>Next anecdote</button>
      <button onClick={() => voteAnecdote()}>Vote</button>
      <br/>
      <h2>{anecdotes[selected].anecdote}</h2> <br/>
      Votes cast for this anecdote: {anecdotes[selected].votes[0]}
    </div>
  )
}

export default App