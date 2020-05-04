import React from 'react'
import style from './searchForm.module.css';

class SearchForm extends React.Component{
    state = {
        search: '',
        query: ''
    }

    setSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    
    getSearchForm = (e) => {
        e.preventDefault();
        this.setState(
        {
            query: this.state.search
        },
            () => {this.props.getSearch(this.state.query)}
        )
    }

    render(){
        return(
            <form className={style.searchForm} onSubmit={this.getSearchForm}>
                <input className={style.searchBar} value={this.state.search} onChange={this.setSearch} type="text" placeholder="np. chicken"/>
                <button className={style.searchButton} type="submit">
                    Search
                </button>
            </form>
        )
    }
}

export default SearchForm;