import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average { (good - bad)/(good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad))*100}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
