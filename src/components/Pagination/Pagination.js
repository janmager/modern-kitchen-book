import React from 'react'
import style from './pagination.module.css';

class Pagination extends React.Component{
    state = {
        pageNumbers: []
    }
    componentWillMount = () => {
        const pN = []
        for(let i = 1; i <= Math.ceil(this.props.totalRecipes/this.props.recipesPerPage); i++){
            pN.push(i)
        }
        this.setState({
            pageNumbers: pN
        })
    }
    render(){
        return(
            <div className={style.paginationBox}>
                {this.state.pageNumbers.map(number =>(
                    <span onClick={() => this.props.paginate(number)} key={number}>{number}</span>
                ))}
            </div>
        )
    }
}

export default Pagination;