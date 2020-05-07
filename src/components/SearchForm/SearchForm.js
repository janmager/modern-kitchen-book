import React from 'react'
import style from './searchForm.module.css';

import { faSeedling, faDrumstickBite, faIceCream, faFish, faWineGlassAlt, faEgg, faLeaf, faCheese } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchForm extends React.Component{
    state = {
        search: '',
        query: '',
        healthLabels: [
            {
                id: 1,
                label: 'Vege',
                icon: faDrumstickBite,
                apiName: 'Vegetarian',
                active: false
            },
            {
                id: 2,
                label: 'Vegan',
                icon: faLeaf,
                apiName: 'Vegan',
                active: false
            },
            {
                id: 3,
                label: 'Low Sugar',
                icon: faIceCream,
                apiName: 'Low-Sugar',
                active: false
            },
            {
                id: 4,
                label: 'Fish Free',
                icon: faFish,
                apiName: 'Fish-Free',
                active: false
            },
            {
                id: 5,
                label: 'Alcohol Free',
                icon: faWineGlassAlt,
                apiName: 'Alcohol-Free',
                active: false
            },
            {
                id: 6,
                label: 'Gluten Free',
                icon: faSeedling,
                apiName: 'Gluten-Free',
                active: false
            },
            {
                id: 7,
                label: 'Egg Free',
                icon: faEgg,
                apiName: 'Egg-Free',
                active: false
            }
            ,
            {
                id: 8,
                label: 'Dairy Free',
                icon: faCheese,
                apiName: 'Dairy-Free',
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

    setActive = (id) => {
        if(this.state.healthLabels[id-1].active) this.state.healthLabels[id-1].active = false
        else this.state.healthLabels[id-1].active = true

        this.forceUpdate()
    }

    chooseHealtyLabel = (id, apiName) => {
        if(this.state.healthLabels[id-1].active){
            this.props.chooseHealtyLabel(apiName)
        }
        else{
            this.props.deleteHealtyLabel(apiName)
        }
    }

    render(){
        return(
            <form className={style.searchForm} onSubmit={this.getSearchForm}>
                <div className={style.mainSearch}>
                    <input className={style.searchBar} value={this.state.search} onChange={this.setSearch} type="text" placeholder="np. chicken"/>
                    <button className={style.searchButton} type="submit">
                        Search
                    </button>
                    <div className={style.calories}>
                        {/* will be calories filter */}
                    </div>
                </div>
                <div className={style.filters}>
                    {
                        this.state.healthLabels.map((diet) => (
                            <div className={style.boxFilter} key={diet.id} onClick={() => {this.setActive(diet.id); this.chooseHealtyLabel(diet.id, diet.apiName)}}>
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