import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe:Recipe;
  constructor(private activatedRoute:ActivatedRoute,
    private recipesService:RecipesService,
    private route:Router,
    private alertCtrl:AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        this.route.navigate(['/recipes']);
        return;
      }
      const recipeId=paramMap.get('recipeId');
      console.log("recipeid: ",recipeId);
      this.loadedRecipe= this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header:'Are you sure?',
      message:'Do you want to delete this recipe?',
      buttons:[{
        text:'Delete',
        handler:()=>{
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.route.navigate(['/recipes']);
        }
      },{
        text:'Cancel',
        role:'cancel'
      }]
    }).then(alertEl=>{
      alertEl.present();
    })
    
  }

}
