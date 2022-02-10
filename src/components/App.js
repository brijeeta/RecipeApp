
import RecipeList from './RecipeList'
import '../css/app.css'
import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import RecipeEdit from './RecipeEdit'

export const RecipeContext = React.createContext()

const LOCAL_STORGAE_KEY= 'cookingWithReact.recipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [ selectedRecipeId,SetSelectedRecipeId] = useState()

  const selectedRecipe = recipes.find((recipe)=>recipe.id=== selectedRecipeId)

// add getitem before set item to make local storage work
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORGAE_KEY)
    if (recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORGAE_KEY,JSON.stringify(recipes))
  }, [recipes])



  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }


  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: '',
        },
      ],
    }
    SetSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
    console.log(recipes)
  }
  

function handleRecipeChange(id,recipe){
  const newRecipes =[...recipes]
  const index = newRecipes.findIndex(r=>r.id === id)
  newRecipes[index]= recipe
  setRecipes(newRecipes)
}

  function handleRecipeSelect(id){
    SetSelectedRecipeId(id)
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && < RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}


const sampleRecipes = [
  {
    id: 1,
    name:'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1.Put salt\n2.Put chicken in oven\n3.Eat chicken",
    ingredients:[{
      id:1,
      name:"chicken",
      amount: "1 kg"
    },{
      id:2,
      name:"salt",
      amount: "as per taste"
    }]
  },
  {
    id: 2,
    name:'Plain Pork',
    servings: 3,
    cookTime: '2:45',
    instructions: "1.Put salt\n 2.put paprika on pork\n3.Eat Pork",
    ingredients:[{
      
      id:1,
      name:"pork",
      amount: "2 Kg"
    },{
      id:2,
      name:"salt",
      amount: "as per taste"
    }]
  },
]
export default App;
