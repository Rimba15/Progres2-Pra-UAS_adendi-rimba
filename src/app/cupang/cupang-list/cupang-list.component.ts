import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Cupang } from '../cupang.model';
import { CupangService } from '../cupang.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cupang-list',
  templateUrl: './cupang-list.component.html',
  styleUrls: ['./cupang-list.component.css']
})
export class CupangListComponent implements OnInit, OnDestroy {

  cupangs:Cupang[];
  subscription: Subscription;
  

  constructor(private cupangService:CupangService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.cupangService.cupangsChanged
    .subscribe(
      (cupangs: Cupang[]) =>{
        this.cupangs = cupangs;
      }
    );
    this.cupangs= this.cupangService.getCupangs();
  }
  onNewCupang(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
  
}
