import { EventEmitter } from "@angular/core";
import { Ingrediant } from "src/app/shared/ingrediant.model";
import { Recipe } from "../recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is only a test', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU_2ROgdypzVGSkdb04eQG4o8WFnPbBpa3Q&usqp=CAU', 
            [
                new Ingrediant('Meat', 10),
                new Ingrediant('Vega', 15),
            ]
        ),
        new Recipe(
            'New Recipe', 
            'NEW recipe need to taste', 
            'https://www.themediterraneandish.com/wp-content/uploads/2020/03/braised-eggplant-recipe-greek-style-6.jpg', 
            [
                new Ingrediant('Roast', 3),
                new Ingrediant('Cheese', 6),
            ]),
    ];
    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}