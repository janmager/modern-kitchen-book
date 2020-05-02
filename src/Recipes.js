import React from 'react';
import style from './recipes.module.css';
import { Link } from 'react-router-dom';

const Recipes = ({all}) => {
    return(
        <Link to={{ pathname: `/recipe/${all.url}`, state: { recipe: all} }}>
            <div className={style.recipe}>
                <div className={style.timeToPrepare}>
                    <span>⏳ {all.totalTime}min</span>
                </div>
                {/* <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol> */}
                <img className={style.mainImg} src={all.image} alt='' />
                <div className={style.onImg}>
                    <h1>{all.label}</h1>
                </div>
            </div>
        </Link>
    );
}

export default Recipes;