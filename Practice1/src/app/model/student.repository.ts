import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class StudentRepository{
    private Studentlist: Student[];
    private departments: String[];

    getStudents(dep: String){
        return this.Studentlist.filter(p=>dep==null||dep==p.department)
    }
    getDepartments(){
        return this.departments;
    }
    getStudent(id: number){
        return this.Studentlist.filter(p=>id==p.id);
    }

    public constructor(source: StaticDataSource){
        source.getStudents().subscribe(data=>{
            this.Studentlist=data;
            this.departments=data.map(p=>p.department).filter((c,index,array)=>array.indexOf(c)==index)
        });
    }

}