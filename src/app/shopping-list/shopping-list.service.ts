import { Injectable, EventEmitter } from '@angular/core';
import { Tipe } from'../shared/tipe.model';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  TipeChange = new Subject<Tipe[]>();
  startedEditing =new Subject<number>();
  private tipes:Tipe[]=[
    new Tipe('Moon',23),
    new Tipe('Hellboy',10),
  ];
constructor() { }
getTipes(){
  return this.tipes.slice();
}
getTipe(index:number){
  return this.tipes[index];
}
addTipe(tipe:Tipe){
  this.tipes.push(tipe);
  this.TipeChange.next(this.tipes.slice());
}
addTipes(tipes: Tipe[]){
  this.tipes.push(...tipes);
  this.TipeChange.next(this.tipes.slice());
}
updateTipe(index: number, newTipe: Tipe){
  this.tipes[index] =newTipe;
  this.TipeChange.next(this.tipes.slice());


}
deleteTipe(index: number){
  this.tipes.splice(index, 1);
  this.TipeChange.next(this.tipes.slice());
}
}
