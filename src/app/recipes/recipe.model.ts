import { Ingredient } from '../shared/ingredient.model';
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredientsList : Ingredient[] ;

    constructor(name: string , disrp : string , imgPath: string, ingredients:Ingredient[])
    {
        this.name = name;
        this.description = disrp;
        this.imagePath = imgPath;
        this.ingredientsList = ingredients;
    }
}