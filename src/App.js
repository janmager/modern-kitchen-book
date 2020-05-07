import React from 'react';
import Recipes from './components/Recipes/Recipes';
import Logo from './components/Logo/Logo';
import Pagination from './components/Pagination/Pagination';
import ResultsFor from './components/ResultsFor/ResultsFor';
import SearchForm from './components/SearchForm/SearchForm';
import style from './App.css'

class App extends React.Component {
  state = {
    APP_ID: "1107b38c",
    APP_KEY: "9d1be84bb7db421688f0fac4c1451706",
    search: "chicken",
    recipes: [],
    loading: false,
    currentPage: 1,
    recipesPerPage: 12,
    indexOfLastRecipe: null,
    indexOfFirstRecipe: null,
    currentRecipes: [],
    totalAmoutOfSearchedRecipes: 100,
    filteredRecipes: [],
    healtyLabels: []
  }

  componentDidMount = () => {
    // if(this.props.location.state.currentSearch){
    //   this.setState({
    //     search: this.props.location.state.currentSearch
    //   },
    //     () => this.getRecipes())
    // }
    // else{
      this.getRecipes()
    // }
  }

  updatePagination = () => {
    this.setState({
      indexOfLastRecipe: this.state.currentPage*this.state.recipesPerPage
    },
      () => { 
        // console.log('indexOfLastRecipe: '+this.state.indexOfLastRecipe);
        this.setState({
          indexOfFirstRecipe: this.state.indexOfLastRecipe-this.state.recipesPerPage
        },
          () => { 
            // console.log('indexOfFirstRecipe: '+this.state.indexOfFirstRecipe);
            this.setState({
              currentRecipes: this.state.recipes.slice(this.state.indexOfFirstRecipe,this.state.indexOfLastRecipe)
            },
              // () => { console.log(this.state.currentRecipes);}
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
      loading: true,
      currentPage: 1
    })
    const response = await fetch(
      `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=${this.state.totalAmoutOfSearchedRecipes}`
      // `https://api.edamam.com/search?q=${this.state.search}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&to=${this.state.totalAmoutOfSearchedRecipes}${(this.state.healtyLabels.length>0 ? '&health='+this.state.healtyLabels.join('&health=') : '')}`
    );    
    const data = await response.json();
    this.setState({
      recipes: data.hits
    },
      () => {
        // console.log('raw: '+this.state.recipes.length);
        
        let fRecipes = this.state.recipes.filter((recipe) => {
          console.log(recipe.recipe.healthLabels);
          
          if(recipe.recipe.totalTime!==0) return true
          else return false
        })
        // console.log('with time: '+fRecipes.length);

        if(this.state.healtyLabels.length>0){
          let healthyLabelsFilter = [...this.state.healtyLabels]
          let len = healthyLabelsFilter.length
          fRecipes = fRecipes.filter(recipe => {
            let correct = 0
            let healthyLabelsApi = [...recipe.recipe.healthLabels]
            healthyLabelsFilter.map(label => {
              healthyLabelsApi.map(l => {                
                if(label==l) correct += 1
              })
            })
            if(correct===len) return true
            else return false
          })
        }
        // console.log('with filters: '+fRecipes.length);
        console.log(fRecipes);
        
        // console.log(this.state.recipes)
        this.setState({
          loading: false,
          recipes: fRecipes
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

  prevPaginate = () => {    
    if(this.state.currentPage>1){
      this.setState({
        currentPage: this.state.currentPage-1
      },
      () => { this.updatePagination() })
    }
  }

  nextPaginate = () => {
    if(this.state.currentPage<(Math.ceil(this.state.recipes.length/this.state.recipesPerPage))){
      this.setState({
        currentPage: this.state.currentPage+1
      },
      () => { this.updatePagination() })
    }
  }

  chooseHealtyLabel = (label) => {
    let labels = [...this.state.healtyLabels]
    labels.push(label)
    this.setState({
      healtyLabels: labels
    },
    () => {
      console.log('choosed: '+this.state.healtyLabels)
      this.getRecipes()
    })
  }

  deleteHealtyLabel = (label) => {
    console.log('to del: '+label);
    let labels = [...this.state.healtyLabels]
    labels = labels.filter(item => item !== label)
    this.setState({
      healtyLabels: labels
    },
    () => {
      console.log('choosed: '+this.state.healtyLabels)
      this.getRecipes()
    })
  }

  render(){
    return(
      <div className={style.App}>
        <Logo logoText1="Recipe" logoText2="Me" />
        <SearchForm 
          searchValue={this.state.search} 
          getSearch={this.getSearch}
          chooseHealtyLabel={this.chooseHealtyLabel}
          deleteHealtyLabel={this.deleteHealtyLabel}
        />
        {this.state.loading 
          ? 
            <h3>Loading...</h3> 
          : 
            <div>
              <ResultsFor search={this.state.search} />
              <Recipes currentSearch={this.state.search} loading={this.state.loading} recipes={this.state.currentRecipes} />
              <Pagination currentPage={this.state.currentPage} recipesPerPage={this.state.recipesPerPage} totalRecipes={this.state.recipes.length} paginate={this.paginate} prevPaginate={this.prevPaginate} nextPaginate={this.nextPaginate} />
            </div>
        }
      </div>
   );
  }

}

export default App;
