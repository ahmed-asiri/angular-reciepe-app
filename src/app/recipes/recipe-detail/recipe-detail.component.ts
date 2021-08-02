import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private slService: ShoppingListService
  ) {
    this.recipeService.recipeSelected.subscribe(
      recipe => {
        this.selectedRecipe = recipe;
      }
    )
  }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.selectedRecipe.ingrediants.forEach(ingrediant => {
      this.slService.addIngrediant(ingrediant);
    })
  }

}
