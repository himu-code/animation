import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Todos1Component } from './todos1/todos1.component';
import { SlideComponent } from './slide/slide.component';
import { Todos2Component } from './todos2/todos2.component';

@NgModule({
  declarations: [
    AppComponent,
    Todos1Component,
    SlideComponent,
    Todos2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
