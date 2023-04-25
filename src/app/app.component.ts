import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showRecipes = true;
  showShoppingList = true;

  receivedRecipesEmit(ev){
    console.log('receivedRecipesEmit()' + ev);
    this.showRecipes = true;
    this.showShoppingList = false;
  }
  receivedShoppingListEmit(ev){
    console.log('receivedShoppingListEmit()' + ev);
    this.showRecipes = false;
    this.showShoppingList = true;
  }  

}
