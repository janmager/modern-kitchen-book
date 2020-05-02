import React from 'react';
import style from './recipes.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    return(
        <div className={style.recipe}>
            <h1>{recipe.label}</h1>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
            {/* <p>{parseFloat(calories.toFixed(0))} kcal</p> */}
            <img src={recipe.image} alt='' />
            <div className={style.btn}>
                <Link to={{ 
                    pathname: `/recipe/${recipe.url}`,
                    state: { recipe: recipe} }}>
                    Zobacz przepis
                </Link>
            </div>
        </div>
    );
}

export default Recipe;