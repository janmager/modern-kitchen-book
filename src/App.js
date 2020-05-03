import React, {useEffect, useState} from 'react';
import Recipes from './Recipes/Recipes';
import './App.css';

const App = () => {

  const APP_ID = '1107b38c';
  const APP_KEY = '9d1be84bb7db421688f0fac4c1451706';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("salmon");

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="np. chicken"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h2>Wyszukiwania dla: {query}</h2>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipes 
            all={recipe.recipe}
            key={recipe.recipe.url}
          /> 
        ))}
      </div>
    </div>
  );
}

export default App;
