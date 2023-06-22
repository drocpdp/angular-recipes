import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() triggerRecipeSelectionRelay = new EventEmitter<Recipe>;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  itemTriggered(ev: Recipe){
    console.log("itemTriggered() in recipe-list component");
    this.triggerRecipeSelectionRelay.emit(ev);
  }

}
