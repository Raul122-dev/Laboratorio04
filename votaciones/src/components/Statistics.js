import Statistic from './Statistic'

const Statistics = (props) => {

    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad)/all
    const positive = (props.good / all)*100

    return(
        <div className="statistics_list">
            <h1>Statistics</h1>
            <Statistic text="good" value ={props.good} />
            <Statistic text="neutral" value ={props.neutral} />
            <Statistic text="bad" value ={props.bad} />
            <Statistic text="all" value ={all} />
            <Statistic text="average" value ={average} />
            <Statistic text="positive" value ={positive + '%'} />
        </div>
    )
}

export default Statistics