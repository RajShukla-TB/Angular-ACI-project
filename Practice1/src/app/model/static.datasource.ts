import { Student } from './student.model';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class StaticDataSource{
    private students: Student[]=[
        new Student(1,"Student 1","Science","Address 1"),
        new Student(2,"Student 2","Science","Address 2"),
        new Student(3,"Student 3","Science","Address 3"),
        new Student(4,"Student 4","Science","Address 4"),
        new Student(5,"Student 5","Science","Address5"),
        new Student(6,"Student 6","Math","Address 6"),
        new Student(7,"Student 7","Math","Address 7"),
        new Student(8,"Student 8","Math","Address 8"),
        new Student(9,"Student 9","Math","Address 9"),
        new Student(10,"Student 10","Math","Address 10",),
        new Student(11,"Student 11","Social","Address 11",),
        new Student(12,"Student 12","Social","Address 12",),
        new Student(13,"Student 13","Social","Address 13"),
        new Student(14,"Student 14","Social","Address 14"),
        new Student(15,"Student 15","Social","Address 15")
    ];
    getStudents():Observable<Student[]>{
        return from([this.students]);
    }

}