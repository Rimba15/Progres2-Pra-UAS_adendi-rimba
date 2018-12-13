import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Tipe } from './tipe.model';
import { ShoppingListService } from '../shopping-list.service';
import{NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
subscription:Subscription;
editMode= false;
editedItemIndex:number;
editedItem:Tipe;
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slsService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slsService.getTipe(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
onSubmit(form: NgForm){
  const value =form.value;
  const newTipe= new Tipe(value.name,value.amount);
  if(this.editMode){
    this.slsService.updateTipe(this.editedItemIndex, newTipe);
  }else{
    this.slsService.addTipe(newTipe);
  }
  this.editMode= false;
  form.reset();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;

}
onDelete(){
  this.slsService.deleteTipe(this.editedItemIndex);
this.onClear();
}
ngOnDestroy(){
this.subscription.unsubscribe();
}
}