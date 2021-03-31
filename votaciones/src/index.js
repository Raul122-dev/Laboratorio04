import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics.js'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => {
    setGood( good + 1 ) 
  }
  const ClickNeutral = () => {
    setNeutral( neutral + 1 )

  }
  const ClickBad = () => {
    setBad( bad + 1 )

  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={ClickGood}>good</button>
      <button onClick={ClickNeutral}>neutral</button>
      <button onClick={ClickBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
