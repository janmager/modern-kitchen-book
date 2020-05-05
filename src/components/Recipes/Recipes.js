import React from 'react';
import Card from './Card/Card';
import style from './recipes.module.css'

class Recipes extends React.Component{
    render(){
        let { recipes } = this.props;
    
        return(
            <div className={style.recipes}>
            {recipes.map(recipe => (
                <Card 
                    all={recipe.recipe}
                    key={recipe.recipe.url}
                /> 
            ))}
            </div>
        )
    };
}

export default Recipes;