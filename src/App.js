import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';

function App() {
  // Sample student data
  const initialStudents = [
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    { id: 3, name: 'Student 3', present: false },
    { id: 4, name: 'Student 4', present: false },
    { id: 5, name: 'Student 5', present: false },
    { id: 6, name: 'Student 6', present: false },
    { id: 7, name: 'Student 7', present: false },
    { id: 8, name: 'Student 8', present: false },
    { id: 9, name: 'Student 9', present: false },
    { id: 10, name: 'Student 10', present: false },
  ];

  // State to manage the list of students
  const [students, setStudents] = useState(initialStudents);

  // Function to update the attendance status of a student
  const markAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <main>
        <StudentList students={students} markAttendance={markAttendance} />
      </main>
    </div>
  );
}

export default App;
