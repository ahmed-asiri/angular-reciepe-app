import { Ingrediant } from "../shared/ingrediant.model";

export class Recipe {

    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingrediants: Ingrediant[]
    ) {}
    
}