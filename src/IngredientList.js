import React from "react";
import Ingredient from "./Ingredient";
export default function IngredientList({ingredients}) {


  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={Ingredient.id} {...ingredient}/>
  });


  return ( 
       <div>
    {ingredientElements}
      </div>
    )
}
