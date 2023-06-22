import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe1','1This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
        new Recipe('A Test Recipe2','2This is simply a test','https://clovegarden.com/ingred/img/ig_kimchee01f.jpg'),
        new Recipe('A Test Recipe3','3This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
     ];

     getRecipes() {
        return this.recipes.slice();
     }

}