import React from 'react';
import Recipes from './components/Recipes/Recipes';
import Logo from './components/Logo/Logo';
import Pagination from './components/Pagination/Pagination';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

class App extends React.Component {
  state = {
    APP_ID: "1107b38c",
    APP_KEY: "9d1be84bb7db421688f0fac4c1451706",
    search: "chicken",
    recipes: []
  }

  componentDidMount = () => {
    this.getRecipes();
  }
  
  getSearch = (e) => {
    this.setState(
      {
        search: e
      },
      () => {this.getRecipes()}
    );
  }

  getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=20`
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
        <SearchForm 
          searchValue={this.state.search} 
          getSearch={this.getSearch}
        />
        <h2>Results for: {this.state.search}</h2>
        <div className='recipes'>
          {this.state.recipes.map(recipe => (
            <Recipes 
              all={recipe.recipe}
              key={recipe.recipe.url}
            /> 
          ))}
        </div>
        <Pagination />
      </div>
   );
  }

}

export default App;
