import './index.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(props.anecdotes)

  const aleatoria = () => {
    var num = Math.floor((Math.random() * props.anecdotes.length -1) + 1)
    setSelected( num )
  }

  const votar = () => {
    let vote_cop = [...votes]
    vote_cop[selected].vote += 1
    setVote(
      vote_cop
    )

  }
  let mayor = votes.sort((a,b) => b.vote - a.vote)
  console.log(votes)

  
  return (
    <div>
      <div className="container_title">
        <h1>Anecdote of the day </h1>
      </div>
      <div className="container_anecdotas">
        <p>{votes[selected].anecd}</p> 
        <p>has {votes[selected].vote} votes</p>
      </div>
      <div className="container_buttons">
        <button className="button_vote" onClick={votar}>Votar</button>
        <button className="button_vote" onClick={aleatoria}>next anecdote</button>
      </div>
      <div className="container_title">
        <h1>Anecdote whit most votes </h1>
      </div>
      <div className="container_anecdotas">
        <p>{mayor[0].anecd}</p>
        <p>{mayor[0].vote}</p>
      </div>
      
    </div>
  )
}

const anecdotes = [
  {
    vote: 0,
    anecd: 'If it hurts, do it more often',
  },
  {
    vote: 0,
    anecd: 'Adding manpower to a late software project makes it later!',
  },
  {
    vote: 0,
    anecd: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  },
  {
    vote: 0,
    anecd: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  },
  {
    vote: 0,
    anecd: 'Premature optimization is the root of all evil.',
  },
  {
    vote: 0,
    anecd: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  }
    
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)