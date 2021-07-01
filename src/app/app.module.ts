import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';

//pipes
import { FilterPipe } from './pipes/filter.pipe';

import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
