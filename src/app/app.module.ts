import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { SalarieComponent } from './salarie/salarie.component';
import { AddSalarieComponent } from './add-salarie/add-salarie.component';
import {ROUTING} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListSalariesComponent } from './list-salaries/list-salaries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalarieComponent,
    AddSalarieComponent,
    ListSalariesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ROUTING,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
