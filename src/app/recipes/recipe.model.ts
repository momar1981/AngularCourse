export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string , disrp : string , imgPath: string)
    {
        this.name = name;
        this.description = disrp;
        this.imagePath = imgPath;
    }
}