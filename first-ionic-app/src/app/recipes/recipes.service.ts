import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
  private recipes: Recipe[]=[{
    id:"r1",
  title:"Chicken Biriyani",
  imageUrl:"https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
  ingredients:["Chicken","Rice","ghee","spices"]
    },
    {id:"r2",
    title:"Dragon Chicken",
    imageUrl:"https://dwellbymichelle.com/wp-content/uploads/2022/01/DWELL-Dragon-Chicken-Recipe.jpg",
    ingredients:["Chicken","spices","capsicum","sauce"]
      }
    ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe => {
      return recipe.id===recipeId;
    })};
  }

  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipe.id !== recipeId;
    });
  }
}
