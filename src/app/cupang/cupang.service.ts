import { Injectable } from '@angular/core';
import { Cupang } from '../cupang/cupang.model';
import { Tipe } from '../shared/tipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class CupangService {
  cupangsChanged=new Subject<Cupang[]>();

  private cupangs:Cupang[]=[
    new Cupang('Aceh Gayo','The Gayo highland in Aceh, stretching as long as the back of Mount Barisan on Sumatera island, is one of the top arabica producers in Indonesia. Much to the favour of the fertile volcanic soil, Gayo delivers a distinct and unique coffee quality, the uniqueness that takes coffee enthusiasts to the taste of Ethiopia and Latin America, characterised by the floral notes such as black tea to dried-fruit, though still much in touch with the classic and notable Sumateran Arabica spicy characteristics, consisting the likes of ginger, clove, and lemongrass.',
  '../src/app/img/Aceh.png',
  [
    new Tipe('moon',1),
    new Tipe('Hellboy',1),
  ]),
  new Cupang('Bali Kintamani','Beans that are originated from Kintamani area in Bali has a very unique taste that differentiate it from any other beans. The distinctive taste is the result of inter cropping style between coffee beans and fruits. Kintamani area is known for its cold and dry climate with high air temperature, its also has volcanic soil ground. This beans usually have a smooth and slightly lighter taste.','../src/app/img/Bali.png',
[
  new Tipe('chicken',1),
  new Tipe('lele',3),
  new Tipe('egg',1),
]),  
new Cupang('Espresso Blend','Get your mind and coffee in tune with with the pour over technique, allowing the coffee to seep slowly for a more complex yet delicate way of achieving intense flavors for your cup of coffee. Meditate and spend that extra time for your beautiful cup of coffee. This on-the-go alternative is great for those wanting to have their coffee accessible, without having to compromise its quality.','../src/app/img/Espresso.png',
[
  new Tipe('chicken',1),
  new Tipe('lele',3),
  new Tipe('egg',1),
]),  
new Cupang('Toraja Sapan','Toraja is a valuable coffee producing area located in the south of Sulawesi. The highland of Toraja has a mountain range standing at higher than 1,400 meters above sea level. The land keeps volcanic ground (soil) that results in a distinct taste and aroma. Much to the favours of the local farmers who restlessly attend to the cultivation of coffee, Toraja is an expert post-harvest raw coffee processor. ','../src/app/img/Toraja.png',
[
  new Tipe('chicken',1),
  new Tipe('lele',3),
  new Tipe('egg',1),
]),  
new Cupang('Kerinci Natural','Coffee beans originating from Kerinci was growned in Jambi on rich volcanic soils that are surrounded by other crops such as cinnamon and timber. Naturally processed on terrain that has hilly typography with high altitude 1500 above sea level, Kerinci coffee flourishes with unique and delicious flavor.','../src/app/img/Kerinci.png',
[
  new Tipe('chicken',1),
  new Tipe('lele',3),
  new Tipe('egg',1),

]),  
];

  getCupangs(){
    return this.cupangs.slice();
  }
  addTipesShoppingList(tipes: Tipe[]){
    this.slsService.addTipes(tipes);
  }
  getCupang(index:number){
    return this.cupangs [index] ;
  }
constructor(private slsService: ShoppingListService) { 
}
  setCupangs(cupangs: Cupang[]) {
    this.cupangs = cupangs;
    this.cupangsChanged.next(this.cupangs.slice());
  }

addCupang(cupang: Cupang){
this.cupangs.push(cupang);
this.cupangsChanged.next(this.cupangs.slice());
}
updateCupang(index: number, newCupang: Cupang){
this .cupangs[index]= newCupang;
this.cupangsChanged.next(this.cupangs.slice());
}
deleteCupang(index: number){
  this.cupangs.splice(index, 1);
  this.cupangsChanged.next(this.cupangs.slice());
}
}