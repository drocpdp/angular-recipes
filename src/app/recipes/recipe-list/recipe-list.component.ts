import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
  ];

}
