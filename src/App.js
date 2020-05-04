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
    recipesPerPage: 5,
    indexOfLastRecipe: null,
    indexOfFirstRecipe: null,
    currentRecipes: [],
    totalAmoutOfSearchedRecipes: 50
  }

  componentDidMount = () => {
    this.getRecipes();
  }

  updatePagination = () => {
    this.setState({
      indexOfLastRecipe: this.state.currentPage*this.state.recipesPerPage
    },
      () => { 
        console.log('indexOfLastRecipe: '+this.state.indexOfLastRecipe);
        this.setState({
          indexOfFirstRecipe: this.state.indexOfLastRecipe-this.state.recipesPerPage
        },
          () => { 
            console.log('indexOfFirstRecipe: '+this.state.indexOfFirstRecipe);
            this.setState({
              currentRecipes: this.state.recipes.slice(this.state.indexOfFirstRecipe,this.state.indexOfLastRecipe)
            },
              () => { console.log(this.state.currentRecipes);
               }
            )
          }
        )
      }
    )
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
      `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=${this.state.totalAmoutOfSearchedRecipes}`
    );
    const data = await response.json();
    this.setState({
      recipes: data.hits
    },
      () => {
        console.log(data.hits)
        this.setState({
          loading: false
        }, this.updatePagination()
        )
      }
    )
  }

  paginate = (number) => {
    this.setState({
      currentPage: number
    },
    () => { this.updatePagination() })
  }

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
              <Recipes loading={this.state.loading} recipes={this.state.currentRecipes} />
              <Pagination recipesPerPage={this.state.recipesPerPage} totalRecipes={this.state.recipes.length} paginate={this.paginate} />
            </div>
        }
      </div>
   );
  }

}

export default App;
