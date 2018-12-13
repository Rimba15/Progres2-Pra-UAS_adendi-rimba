import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cupang } from '../../cupang.model';
import { CupangService } from '../../cupang.service';

@Component({
  selector: 'app-cupang-item',
  templateUrl: './cupang-item.component.html',
  styleUrls: ['./cupang-item.component.css']
})
export class CupangItemComponent implements OnInit {

  @Input() cupang:Cupang;
  @Input() index:number;
  
  ngOnInit() {
  }
}
