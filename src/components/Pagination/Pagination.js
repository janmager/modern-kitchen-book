import React from 'react'
import style from './pagination.module.css';

import { faCaretLeft,faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <span onClick={() => this.props.prevPaginate()}> <FontAwesomeIcon icon={faCaretLeft} /> </span>
                {this.state.pageNumbers.map(number =>(
                    <span className={this.props.currentPage===number ? style.active : ''} onClick={() => this.props.paginate(number)} key={number}>{number}</span>
                ))}
                <span onClick={() => this.props.nextPaginate()}> <FontAwesomeIcon icon={faCaretRight} /> </span>
            </div>
        )
    }
}

export default Pagination;