import React from 'react';
import Recipes from './components/Recipes/Recipes';
import Logo from './components/Logo/Logo';
import './App.css';

class App extends React.Component {
  state = {
    APP_ID: "1107b38c",
    APP_KEY: "9d1be84bb7db421688f0fac4c1451706",
    query: "salmon",
    search: "",
    recipes: []
  }

  componentDidMount = () => {
    this.getRecipes();
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  
  getSearch = (e) => {
    console.log('before query '+ this.state.query);
    e.preventDefault();
    this.setState(
      {
        query: this.state.search,
        search: ''
      },
      this.getRecipes
    );
  }

  getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=20`
    );
    const data = await response.json();
    this.setState({
      recipes: data.hits
    });
    console.log(data.hits);
  };

  render(){
    return(
      <div className="App">
        <Logo logoText1="Recipe" logoText2="Me" />
        <form className="search-form" onSubmit={this.getSearch}>
          <input className="search-bar" type="text" value={this.state.search} onChange={this.updateSearch} placeholder="np. chicken"/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <h2>Results for: {this.state.query}</h2>
        <div className='recipes'>
          {this.state.recipes.map(recipe => (
            <Recipes 
              all={recipe.recipe}
              key={recipe.recipe.url}
            /> 
          ))}
        </div>
      </div>
   );
  }

}

export default App;
