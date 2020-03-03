import { Component } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentRepository } from '../model/student.repository'

@Component({
    selector:"stapp",
    templateUrl:"student1app.component.html"
})
export class Student1AppComponent{
    selectdep=null;
    selectedPage: number;
    constructor(private repo: StudentRepository){};
    get students(): Student[]{
        
        return this.repo.getStudents(this.selectdep);
    }
    get departments(): String[]{
        return this.repo.getDepartments();
    }
    changeDept(newD?: String){
        this.selectdep=newD;
        this.selectedPage=1;
    }
    
}