import React from 'react';
import Recipes from './components/Recipes/Recipes';
import Logo from './components/Logo/Logo';
import Pagination from './components/Pagination/Pagination';
import ResultsFor from './components/ResultsFor/ResultsFor';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

class App extends React.Component {
  state = {
    APP_ID: "1107b38c",
    APP_KEY: "9d1be84bb7db421688f0fac4c1451706",
    search: "chicken",
    recipes: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 5
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
    this.setState({
      loading: true
    })
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=20`
    );
    const data = await response.json();
    this.setState({
      recipes: data.hits
    });
    console.log(data.hits);
    this.setState({
      loading: false
    })
  };

  render(){
    return(
      <div className="App">
        <Logo logoText1="Recipe" logoText2="Me" />
        <SearchForm 
          searchValue={this.state.search} 
          getSearch={this.getSearch}
        />
        {this.state.loading 
          ? 
            <h3>Loading...</h3> 
          : 
            <div>
              <ResultsFor search={this.state.search} />
              <Recipes loading={this.state.loading} recipes={this.state.recipes} />
              {/* <Pagination /> */}
            </div>
        }
      </div>
   );
  }

}

export default App;
