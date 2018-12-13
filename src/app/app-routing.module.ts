import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CupangComponent } from './cupang/cupang.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CupangStartComponent } from './cupang/cupang-start/cupang-start.component';
import { CupangDetailComponent } from './cupang/cupang-detail/cupang-detail.component';
import { CupangEditComponent } from './cupang/cupang-edit/cupang-edit.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/cupangs',pathMatch:'full' },
    { path:'cupangs',component:CupangComponent,children:[
        { path:'',component:CupangStartComponent },
        { path: 'new',component:CupangEditComponent },
        { path: ':id',component:CupangDetailComponent },
        { path:':id/edit',component:CupangEditComponent },
    ]},
    { path:'shopping-list',component:ShoppingListComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}