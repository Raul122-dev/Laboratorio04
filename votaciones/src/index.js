import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics.js';
import Button from './components/Button.js';
import './index.css'

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
      <h1 className="title">Give Feedback</h1>
      <div className="buttons">
        <Button handleClick={ClickGood} text="good"/>
        <Button handleClick={ClickNeutral} text="neutral"/>
        <Button handleClick={ClickBad} text="bad"/>
      </div>
      <div className="stats">
        {!good & !neutral & !bad
          ? <p>No Feedback given</p>
          : <Statistics good={good} neutral={neutral} bad={bad}/>
        }
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
