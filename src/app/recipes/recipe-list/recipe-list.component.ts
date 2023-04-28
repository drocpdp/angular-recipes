import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1','1This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
    new Recipe('A Test Recipe2','2This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
    new Recipe('A Test Recipe3','3This is simply a test','https://www.cookincanuck.com/wp-content/uploads/2022/03/Caramelized-Cabbage-Recipe-Square-1200-1.jpg'),
 ];

 @Output() triggerRecipeSelectionRelay = new EventEmitter<Recipe>;


  itemTriggered(ev: Recipe){
    console.log("itemTriggered() in recipe-list component");
    this.triggerRecipeSelectionRelay.emit(ev);
  }

}
