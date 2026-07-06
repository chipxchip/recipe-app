import React, { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = (props) => {
    const [name, setName] = sueState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState("");
    const [errors, setErrors] = useState("");

    const validate = () => {
        const newErrors = {};
        if (name.trim().length <3) newErrors.name = 'Recipe name must be at least 3 characters.';
        if (ingredients.trim().length < 10) newErrors.ingredients = 'Please enter ingredients';
        if (instructions.trim().length < 10) new errors.instructions = 'Please enter instructions';
        return newErrors;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const validattionErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        props.onAddRecipe({ name, ingredients, instructions });
        setName('');
        setIngredients('');
        setInstructions('');
        setErrors({});
    };

    return (
    <div className="form-container">
      <h2>Add a Recipe</h2>
      <form onSubmit={submitHandler}>
        <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
          <label>Recipe Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Chicken Pasta"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className={`form-group ${errors.ingredients ? 'invalid' : ''}`}>
          <label>Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. 2 chickens, some noodles"
            rows={3}
          />
          {errors.ingredients && <p className="error-text">{errors.ingredients}</p>}
        </div>
        <div className={`form-group ${errors.instructions ? 'invalid' : ''}`}>
          <label>Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g. cook it, make sauce"
            rows={3}
          />
          {errors.instructions && <p className="error-text">{errors.instructions}</p>}
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;