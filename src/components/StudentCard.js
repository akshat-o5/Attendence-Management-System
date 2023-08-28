import React from 'react';

function StudentCard({ student, onMarkAttendance }) {
  return (
    <div className="student-card">
      <div className="student-info">
      <img src='/icons8-student-48.png' alt={`Photo of ${student.name}`} />


        <h3 className="student-name">{student.name}</h3>
      </div>
      <button
        className={`attendance-button ${student.present ? 'present' : 'absent'}`}
        onClick={() => onMarkAttendance(student.id)}
      >
        {student.present ? 'Present' : 'Absent'}
      </button>
    </div>
  );
}

export default StudentCard;
