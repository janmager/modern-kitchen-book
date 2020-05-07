import React from 'react';
import Card from './Card/Card';
import style from './recipes.module.css'

class Recipes extends React.Component{
    render(){
        let { recipes, currentSearch } = this.props;
    
        return(
            <div className={style.recipes}>
            {recipes.map(recipe => (
                <Card 
                    all={recipe.recipe}
                    key={recipe.recipe.url}
                    currentSearch={currentSearch}
                /> 
            ))}
            </div>
        )
    };
}

export default Recipes;