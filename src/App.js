import React, { useState, useEffect, useCallback } from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import useHttp from "./hooks/useHooks";
import "./App.css";

const FIREBASE_URL =
  "https://recipe-app-98d6d-default-rtdb.firebaseio.com/recipes.json";

function App() {
  const [recipes, setRecipes] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const transformRecipes = useCallback((data) => {
    const loadedRecipes = [];
    for (const key in data) {
      loadedRecipes.push({
        id: key,
        name: data[key].name,
        ingredients: data[key].ingredients,
        instructions: data[key].instructions,
      });
    }
    setRecipes(loadedRecipes);
  }, []);

  useEffect(() => {
    sendRequest({ url: FIREBASE_URL }, transformRecipes);
  }, [sendRequest, transformRecipes]);

  const addRecipeHandler = async (recipe) => {
    await sendRequest({
      url: FIREBASE_URL,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: recipe,
    });
  };

  return (
    <div className="App">
      {error && <p>{error}</p>}
      <RecipeForm onAddRecipe={addRecipeHandler} />
      {isLoading && <p>Loading...</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
