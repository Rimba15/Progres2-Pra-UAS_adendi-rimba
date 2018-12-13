import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tipe } from '../shared/tipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  tipes:Tipe[];
  private subscription: Subscription;
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
  this.tipes=this.slsService.getTipes();
  this.subscription=this.slsService.TipeChange
  .subscribe(
    (Tipe:Tipe[])=>{
      this.tipes=Tipe;
    }
  );
  }
  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
//onIngredientAdded(ingredient:Ingredient){
  //this.ingredients.push(ingredient);
//}
}
