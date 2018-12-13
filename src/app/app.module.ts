import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CupangComponent } from './cupang/cupang.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

//tambah code berikut
import { CupangListComponent } from './cupang/cupang-list/cupang-list.component';
import { CupangDetailComponent } from './cupang/cupang-detail/cupang-detail.component';
//tambah code berkut (2)
import { CupangItemComponent } from './cupang/cupang-list/cupang-item/cupang-item.component';
//tambah code berikut (3)
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CupangEditComponent } from './cupang/cupang-edit/cupang-edit.component';
import { CupangStartComponent } from './cupang/cupang-start/cupang-start.component';
import { CupangService } from './cupang/cupang.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CupangComponent,
    ShoppingListComponent,

    
    //tambah code berikut
    CupangListComponent,
    CupangDetailComponent,
    //tambah code berikut (2)
    CupangItemComponent,
    //tambahkan code berikut (3)
    ShoppingEditComponent,
    DropdownDirective,
    CupangStartComponent,
    CupangEditComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, CupangService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
