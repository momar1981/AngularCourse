import { Ingredient } from '../shared/ingredient.model';
export class Recipe{
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredientsList : Ingredient[] ;

    constructor(id : number,name: string , disrp : string , imgPath: string, ingredients:Ingredient[])
    {
        this.id = id;
        this.name = name;
        this.description = disrp;
        this.imagePath = imgPath;
        this.ingredientsList = ingredients;
    }
}