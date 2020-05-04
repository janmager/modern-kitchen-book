import React from 'react';
import Card from './Card/Card';

class Recipes extends React.Component{
    render(){
        const { recipes } = this.props;
        return(
            <div className='recipes'>
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