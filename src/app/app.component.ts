// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   //title = 'demoapp';
//   student=[
//     {id:1,name:"John",branch:"IT"},
//     {id:2,name:"Jane",branch:"CSE"},
//     {id:1,name:"John",branch:"ECE"}
//   ]
//   selectedStudent:any;
//   deleteStudent(id:any){
//     this.student=this.student.filter(student=>student.id!=id);
//   }
//   addStudent(id:any,name:any,branch:any){
//     this.student.push({id:id.value,name:name.value,branch:branch.value});
//   }
//   editStudent(student:any){
//     this.selectedStudent={...student};
//   }
//   updateStudent(){
//     const index=this.student.findIndex(student=>student.id==this.selectedStudent);
//     console.log(index)
//     this.student[index]=this.selectedStudent
//   }
// }





// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, FormsModule,RouterOutlet], 
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   students = [
//     { id: 1, name: 'john', branch: 'IT' },
//     { id: 2, name: 'Jane', branch: 'CSE' },
//     { id: 3, name: 'smith', branch: 'ECE' }
//   ];

//   selectedStudent: any = null;

//   addStudent(id: any, name: any, branch: any) {
//     this.students.push({
//       id: parseInt(id.value, 10),
//       name: name.value,
//       branch: branch.value
//     });

//     id.value = '';
//     name.value = '';
//     branch.value = '';
//   }

//   deleteStudent(id: any) {
//     this.students = this.students.filter(student => student.id !== id);
//   }

//   editStudent(student: any) {
//     this.selectedStudent = { ...student };
//   }

//   updateStudent() {
//     const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
//     if (index !== -1) {
//       this.students[index] = { ...this.selectedStudent };
//     }
//     this.selectedStudent = null; 
//   }
  
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [
    { id: 1, name: 'john', branch: 'IT' },
    { id: 2, name: 'Jane', branch: 'CSE' },
    { id: 3, name: 'smith', branch: 'ECE' }
  ];

  selectedStudent: any = null;

  addStudent(id: any, name: any, branch: any) {
    this.students.push({
      id: parseInt(id.value, 10),
      name: name.value,
      branch: branch.value
    });

    id.value = '';
    name.value = '';
    branch.value = '';
  }

  deleteStudent(id: any) {
    this.students = this.students.filter(student => student.id !== id);
  }

  editStudent(student: any) {
    this.selectedStudent = { ...student };  // Create a copy to edit it
  }

  updateStudent() {
    const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
    if (index !== -1) {
      this.students[index] = { ...this.selectedStudent }; // Update the student in the array
    }
    this.selectedStudent = null; // Reset the selected student after updating
  }
}






