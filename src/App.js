
import './App.css';
import RecipeList from './RecipeList';
import './css/app.css'

function App() {
  return  (
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name:'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1.Put salt\n 2.put chicken in oven\n3.Eat chicken",
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
