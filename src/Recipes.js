import React from 'react';
import style from './recipes.module.css';
import { Link } from 'react-router-dom';

const Recipes = ({all}) => {
    return(
        <div className={style.recipe}>
            <h1>{all.label}</h1>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
            {/* <p>{parseFloat(calories.toFixed(0))} kcal</p> */}
            <img src={all.image} alt='' />
            <div className={style.btn}>
                <Link to={{ 
                    pathname: `/recipe/${all.url}`,
                    state: { recipe: all} }}>
                    Zobacz przepis
                </Link>
            </div>
        </div>
    );
}

export default Recipes;