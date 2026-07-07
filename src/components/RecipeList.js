import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  return (
    <div className="recipe-list">
      {props.recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img
            src={recipe.image}
            alt={recipe.name}
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
            }}
          />
          <div className="recipe-info">
            <h2>{recipe.name}</h2>
            <h3>Ingerdients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
            <button
              className="delete-button"
              onClick={() => props.onDeleteRecipe(recipe.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
