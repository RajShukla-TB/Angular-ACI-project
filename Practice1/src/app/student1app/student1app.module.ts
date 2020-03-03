import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { Student1AppComponent } from './student1app.component';

@NgModule({
  declarations: [Student1AppComponent],
  imports: [
    CommonModule,ModelModule
  ],
  exports:[Student1AppComponent]
})
export class Student1appModule { }
