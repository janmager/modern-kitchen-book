import React from 'react';
import style from './recipes.module.css';
import { Link } from 'react-router-dom';

const Recipes = ({all}) => {
    return(
        <Link to={{ pathname: `/recipe/${all.url}`, state: { recipe: all} }}>
            <div className={style.recipe}>
                {all.totalTime==0 ?
                "":
                    <div className={style.timeToPrepare}>
                        <span>{
                            all.totalTime>0 && all.totalTime<61 ? ("⏳ "+all.totalTime+"min") : ("⏳ "+Math.floor(all.totalTime/60)+"h "+all.totalTime%60+"min")
                        }</span>
                    </div>
                }
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