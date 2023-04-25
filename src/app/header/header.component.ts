import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed=true;

  @Output() emitRecipesClick = new EventEmitter<boolean>;
  @Output() emitShoppingListClick = new EventEmitter<boolean>;

  onClickRecipes(){
    console.log('onClickRecipes()');
    this.emitRecipesClick.emit(true);
  }
  onClickShoppingList(){
    console.log('onClickShoppingList()');
    this.emitShoppingListClick.emit(true);
  }

}
