import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  @Output() recipeListItemTrigger = new EventEmitter<null>;

  selectRecipe(){
    console.log('selectRecipe() in recipe-item component');
    this.recipeListItemTrigger.emit(null);
  }

}
