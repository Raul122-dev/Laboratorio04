const Statistics = (props) => {

    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad)/all
    const positive = (props.good / all)*100

    return(
        <div>
            <h1>Statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
}

export default Statistics