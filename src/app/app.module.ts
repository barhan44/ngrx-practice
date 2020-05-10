import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { StoreModule } from '@ngrx/store';
import { appReducers } from "./store/reducers/app.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot(appReducers, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
