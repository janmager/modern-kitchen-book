import React from 'react'
import style from './recipe.module.css'

import { Link } from 'react-router-dom'

class Recipe extends React.Component {
    render(){
        const { recipe, currentSearch } = this.props.location.state;
        console.log(recipe);
        return(
            <div className={style.main}>
                <Link to={{pathname: '/', state: {currentSearch: currentSearch}}}>Back to home</Link>
                <h1>{recipe.label}</h1>
                <p>{parseFloat(recipe.calories.toFixed(0))} kcal</p>
                <p>Ilość porcji: {recipe.yield}</p>
                <p>Kalorie na osobę: {parseFloat((recipe.calories/recipe.yield).toFixed(0))} kcal</p>
                <img className={style.img} src={recipe.image} alt='' />
            </div>
        )
    }
}

export default Recipe;