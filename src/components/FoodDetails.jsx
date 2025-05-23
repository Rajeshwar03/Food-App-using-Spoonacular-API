import { useEffect, useState } from "react"
import styles from "./fooddetails.module.css"
import ItemList from "./ItemList"
export default function FoodDetail({foodId}){
    const [food,setFood]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY="ae721eebfe7d4c3da5d3fffe6a4139c8"
    useEffect(()=>{
       async function fetchFood(){
           const res= await fetch(`${URL}?apiKey=${API_KEY}`);
           const data=await res.json()
           console.log(data)
           setFood(data)
           setIsLoading(false)

        }
        fetchFood()
    },[foodId])

    return (
        <div>
        <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}/>
        <div className={styles.recipeDetails}>
        <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
        </span>
         <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
        </span>
        <span><strong>{food.vegetarian ? "🥗vegetarain" : "🍗Non-Vegetarain"}
            </strong>
        </span>
        <span><strong>{food.vegan ? "🐄vegan" :" "}</strong></span> 
         
        </div>
        <div>
            <span>
           
                💰{(food.pricePerServing/100).toFixed(2)}per serving
            </span>
        </div>
      <h2>Ingredients</h2>
       <ItemList food={food} isLoading={isLoading}/>
        
        <h2>
              Instructions</h2>
         <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
  <p>Loading....</p>
) : (
  food.analyzedInstructions?.[0]?.steps?.map((step, index) => (
    <li key={index}>{step.step}</li>
  )) || <p>No instructions found</p>
)}


        </ol>
        </div>
         </div>
        </div>
        
    )
}