import React, { useState, useEffect, useCallback } from 'react';
import RecipeList from ',/components/RecipeList';
import RecipeForm from './jooks/useHttp';
import './App.css';

const FIREBASE_URL =
  "https://recipe-app-98d6d-default-rtdb.firebaseio.com/recipes.json";

function App() {
  const [recipes, setRecipes] = useState([]);
  const { isLOading, error, sendRequest } = useHttp();

  const transformRecipes = useCallback((data) => {
    const loadRecipes = [];
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
  }, [sendRequest, transformREcipes]);

  const addRecipeHandler = async (recipe) => {
    await sendRequest({
      url: FIREBASE_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: recipe,
    )
  }