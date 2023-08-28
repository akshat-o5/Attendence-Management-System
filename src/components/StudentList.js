import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

function StudentList() {
  // Simulated student data (replace with API/database fetch)
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
    { id: 10, name: 'Student 10', present: false }
  ];

  // State to store the list of students
  const [students, setStudents] = useState(initialStudents);

  // Function to handle marking attendance
  const handleMarkAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  useEffect(() => {
    // Here, you can make an API/database request to fetch the list of students
    // and update the 'students' state with the fetched data.
    // For simplicity, we're using static data.
  }, []);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onMarkAttendance={handleMarkAttendance}
        />
      ))}
    </div>
  );
}

export default StudentList;
