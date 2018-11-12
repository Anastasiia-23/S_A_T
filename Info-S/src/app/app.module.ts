import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientDetailsComponent} from './client-details/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailsComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
