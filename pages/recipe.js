import Head from "next/head";
import React, { useState } from "react";
import recipe from "../__mocks__/mockrecipe.js";

export default function Recipe() {
  return (
    <div>
      <h1>Recipe</h1>
      <h2>Ingredients</h2>
      <ol>
        {recipe.extendedIngredients.map((ingredient, i) => (
         
          <li> <span>{i+1}. </span>{ingredient.originalString}</li>
        ))}
      </ol>
      <br className="py-8"/>
      <h2>Instructions</h2>
      <ol>
        {recipe.analyzedInstructions.map(({steps}) => steps.map(({step}, i) => (
         
          <li> <span>{i+1}. </span>{step}</li>
        )))}
      </ol>
    </div>
  );
}
