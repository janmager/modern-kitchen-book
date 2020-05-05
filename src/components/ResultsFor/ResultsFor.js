import React from 'react'
import style from './resultsFor.module.css'

class ResultsFor extends React.Component{
    render(){
        return(
            <h2>Results for: <span>{this.props.search}</span></h2>
        )
    }
}

export default ResultsFor 