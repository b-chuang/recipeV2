import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";


const API_KEY = "529ea0b36abd3519f92c15f18f2b6497";


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;

    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
  
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
    
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">H-Hour Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map((recipe) => {
          return (
          
            <div>
              <img src={recipe.image_url} alt={recipe.title}/>           
              <p key={recipe.recipe_id}>{recipe.title}</p>
            </div>

          );
        }) }
      </div>
    );
  }
}

export default App;