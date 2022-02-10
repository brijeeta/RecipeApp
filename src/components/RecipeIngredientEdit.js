import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
  return (
    <>
      <input 
      className='recipe-edit__input'
      type="text" 
      value={ingredient.name}
      />
      <input 
      type="text" 
      className='recipe-edit__input' 
      value={ingredient.amount}/>
      <button className='btn btn--danger'>&times;</button>
    </>
  )
}
