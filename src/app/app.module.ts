import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ...RoutingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
