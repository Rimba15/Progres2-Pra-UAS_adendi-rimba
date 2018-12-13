import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CupangService } from '../cupang.service';



@Component({
  selector: 'app-cupang-edit',
  templateUrl: './cupang-edit.component.html',
  styleUrls: ['./cupang-edit.component.css']
})
export class CupangEditComponent implements OnInit {
  id:number;
  editMode=false;
  cupangForm: FormGroup;
  constructor( private route:ActivatedRoute,
  private cupangService: CupangService,
private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      console.log(this.editMode);
      }
    )
    
  }
  onSubmit(){
  if(this.editMode){
    this.cupangService.updateCupang(this.id, this.cupangForm.value);
  }else{
    this.cupangService.addCupang(this.cupangForm.value);
  }
  this.onCancel();
  }
  onAddTipe(){
    (<FormArray>this.cupangForm.get('tipes')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    );
  }
  onDeleteTipe(index: number){
    (<FormArray>this.cupangForm.get('tipes')).removeAt(index);
  }
  onCancel(){
   this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(){
    let cupangName='';
    let cupangImagePath='';
    let cupangDescription='';
    let cupangTipes = new FormArray([]);
    if(this.editMode){
      const cupang=this.cupangService.getCupang(this.id);
      cupangName=cupang.name;
      cupangImagePath=cupang.imagePath;
      cupangDescription=cupang.description;
      if (cupang['tipe']){
        for(let tipe of cupang.tipe){
          cupangTipes.push(
           new FormGroup({
             'name' : new FormControl(tipe.name,Validators.required),
             'amount' : new FormControl(tipe.amount,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
           }) 
          );

        }
      }
        }
this.cupangForm =new FormGroup({
  'name': new FormControl(cupangName,Validators.required),
  'imagePath':new FormControl(cupangImagePath,Validators.required),
  'description':new FormControl(cupangDescription,Validators.required),
  'tipes': cupangTipes
});
  }

}
