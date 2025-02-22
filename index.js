
// const express = require('express');
// const app = express();
// app.use(express.json());
// let students = [
//   { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
//   { id: 2, name: 'Jane Smith', age: 22, major: 'ECE' }
// ];
// app.get('/students', (req, res) => {
//   res.json(students);
// });
// app.get('/students/:id', (req, res) => {
//   const studentId = parseInt(req.params.id);
//   const student = students.find(s => s.id === studentId);
  
//   if (student) {
//     res.json(student);
//   } else {
//     res.status(404).send('Student not found');
//   }
// });
// app.post('/students', (req, res) => {
//   const newStudent = req.body;
//   newStudent.id = students.length + 1; 
//   students.push(newStudent);
  
//   res.status(201).json(newStudent);
// });
// app.delete('/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id);
  
//     console.log(`Attempting to delete student with ID: ${studentId}`); 
  
//     const studentIndex = students.findIndex(s => s.id === studentId);
  
//     if (studentIndex !== -1) {
//       students.push(studentIndex, 1); 
//       res.status(200).send(`Student with ID ${studentId} deleted`);
//     } else {
//       console.log(`Student with ID ${studentId} not found`); 
//       res.status(404).send('Student not found');
//     }
//   });

//   app.put('/updateStudents/:id', (req, res) => {
//     const studentId = parseInt(req.params.id);
  
//     const studentIndex = students.findIndex(s => s.id === studentId);
  
//     if (studentIndex !== -1) {
//       students[studentIndex].name=req.body.name
//       students[studentIndex].age=req.body.age
//       students[studentIndex].major=req.body.major
//       res.status(200).send(`Student with ID ${studentId} updated`);
//     } else {
//       console.log(`Student with ID ${studentId} not found`); 
//       res.status(404).send('Student not found');
//     }
//   });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });





const express = require('express')
var app = express()

let students = [
    {"id" : "1" , "name" : "Raj" , "branch" : "IT"},
    {"id" : "2" , "name" : "Ram" , "branch" : "CSE"}
]
app.use(express.json())


app.get("/students",(req,res)=>{
    res.json(students)
})

app.get("/students/:id",(req,res)=>{
    const id = req.params.id;
    let student = students.find(s=>s.id===id)
    
    if(student){
        res.status(200).json({
            "message" : "Student found",
            "Student" : Student
        })
    }
    else{
        res.status(404).json({"message" : "student not found"})
    }
    app.listen(2000,()=>{
    console.log("Server started")
})
})

// app.delete("/deleteStudent/:id",(req,res)=>{
//     const id = req.params.id
//     students = students.filter(s=>s.id!==id)
//     res.status(200).json({
//         "message" : "Deleted Student Successfully",
//         "Student" : students
//     })
// })
// app.listen(2000,()=>{
//     console.log("Server started")
// })

// app.post("/addStudent",(req,res)=>{
//     let student = req.body
//     students.push(student)
//     res.status(200).json({
//         "message" : "Student Added Successfully",
//         "Students" : students
//     })
// })

// app.put("/updateStudent/:id",(req,res)=>{
//     const id = req.params.id
//     studentIndex = students.findIndex(s=>s.id===id)

//     if(studentIndex!=-1){
//         students[studentIndex].name = req.body.name
//         students[studentIndex].branch = req.body.branch

//         res.status(200).json({
//             "message" : "Updated Successfully",
//             "Students" : students        
//         })
//     }
//     else{
//         res.status(404).json({
//             "message" : "Student not found"
//         })
//     }
// })
