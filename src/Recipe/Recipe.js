import React from 'react';
import style from './recipe.module.css';

class Recipe extends React.Component {
    render(){
        console.log(this.props.location.state);
        return(
            <div className={style.main}>
                <h1>{this.props.location.state.recipe.label}</h1>
                <p>{parseFloat(this.props.location.state.recipe.calories.toFixed(0))} kcal</p>
                <p>Ilość porcji: {this.props.location.state.recipe.yield}</p>
                <p>Kalorie na osobę: {parseFloat((this.props.location.state.recipe.calories/this.props.location.state.recipe.yield).toFixed(0))} kcal</p>
                <img className={style.img} src={this.props.location.state.recipe.image} alt='' />
            </div>
        )
    }
}

export default Recipe;