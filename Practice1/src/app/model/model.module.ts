import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { StudentRepository } from './student.repository';

@NgModule({
    providers:[StaticDataSource,StudentRepository]
})
export class ModelModule{}