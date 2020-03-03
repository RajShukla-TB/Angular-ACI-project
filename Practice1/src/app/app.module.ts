import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Student1appModule } from './student1app/student1app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Student1appModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
