import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import {RecipeService} from '../shared/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
  		this.selectedRecipe = recipe;
  	})
  }

}