import React from 'react';
import style from './recipes.module.css';
import { Link } from 'react-router-dom';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Recipes extends React.Component{
    render(){
        const { all } = this.props;
        return(
            <Link className={style.main} to={{ pathname: `/recipe/${all.url}`, state: { recipe: all} }}>
                <div className={style.recipe}>
                    {all.totalTime===0 ?
                    "":
                        <div className={style.timeToPrepare}>
                            <span>
                                <FontAwesomeIcon className={style.clockIcon} icon={faClock} />{" "}
                                {
                                    (all.totalTime>0 && all.totalTime<61) ? (all.totalTime+"min") : (Math.floor(all.totalTime/60)+"h "+all.totalTime%60+"min")
                                }
                            </span>
                        </div>
                    }
                    {/* <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol> */}
                    <img className={style.mainImg} src={all.image} alt='' />
                    <div className={style.onImg}>
                        <h3>    
                            {
                                (all.label).length>20 ?
                                (all.label).substring(0,20)+"..." :
                                all.label
                            } 
                        </h3>
                    </div>
                </div>
            </Link>
        )
    };
}

export default Recipes;