import React from 'react'
import style from './searchForm.module.css';

import { faSeedling, faDrumstickBite, faIceCream, faFish, faPizzaSlice, faEgg, faLeaf, faCheese } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchForm extends React.Component{
    state = {
        search: '',
        query: '',
        healthLabels: [
            {
                id: 1,
                label: 'Vegetarian',
                icon: faDrumstickBite,
                active: false
            },
            {
                id: 2,
                label: 'Vegan',
                icon: faLeaf,
                active: true
            },
            {
                id: 3,
                label: 'Low Sugar',
                icon: faIceCream,
                active: false
            },
            {
                id: 4,
                label: 'Fish Free',
                icon: faFish,
                active: false
            },
            {
                id: 5,
                label: 'Fat Free',
                icon: faPizzaSlice,
                active: true
            },
            {
                id: 6,
                label: 'Gluten Free',
                icon: faSeedling,
                active: false
            },
            {
                id: 7,
                label: 'Egg Free',
                icon: faEgg,
                active: true
            }
            ,
            {
                id: 8,
                label: 'Dairy Free',
                icon: faCheese,
                active: false
            }
        ]
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
                <div className={style.mainSearch}>
                    <input className={style.searchBar} value={this.state.search} onChange={this.setSearch} type="text" placeholder="np. chicken"/>
                    <button className={style.searchButton} type="submit">
                        Search
                    </button>
                </div>
                <div className={style.filters}>
                    {
                        this.state.healthLabels.map((diet) => (
                            <div className={style.boxFilter} key={diet.id}>
                                <div className={[style.filter,diet.active ? style.dietActive : style.dietDisactive].join(' ')}>
                                    <FontAwesomeIcon icon={diet.icon} />
                                </div>
                            <span className={diet.active ? style.activeSpan : style.disactiveSpan}>{diet.label}</span>
                            </div>    
                        ))
                    }
                </div>
            </form>
        )
    }
}

export default SearchForm;