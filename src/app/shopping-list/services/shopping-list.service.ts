import { EventEmitter } from "@angular/core";
import { Ingrediant } from "src/app/shared/ingrediant.model";

export class ShoppingListService {
    ingrediantsChanged = new EventEmitter<Ingrediant[]>();
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('Tomatos', 10)
    ];

    getShoppingList() {
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant)
        this.ingrediantsChanged.emit(this.getShoppingList())
    }
}