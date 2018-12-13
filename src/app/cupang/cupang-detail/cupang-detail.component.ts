import { Component, OnInit, Input } from '@angular/core';
import { Cupang } from '../cupang.model';
import { CupangService } from '../cupang.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cupang-detail',
  templateUrl: './cupang-detail.component.html',
  styleUrls: ['./cupang-detail.component.css']
})
export class CupangDetailComponent implements OnInit {

cupang:Cupang;
id:number;

  constructor(private cupangService:CupangService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.cupang=this.cupangService.getCupang(this.id);
      }
    )
  }
  //membuat method onAddShoppingLists
  onAddShoppingList(){
    this.cupangService.addTipesShoppingList(this.cupang.tipes);
  }
  onEditCupang(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteCupang(){
    this.cupangService.deleteCupang(this.id);
    this.router.navigate(['/cupangs']);
  }

}
