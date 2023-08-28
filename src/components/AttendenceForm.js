import React, { useState } from 'react';

function AttendanceForm({ onMarkAttendance }) {
  const [studentId, setStudentId] = useState('');
  const [isPresent, setIsPresent] = useState(true);

  const handleMarkAttendance = () => {
    // Call the parent component's callback function to mark attendance
    onMarkAttendance(studentId, isPresent);

    // Reset the form
    setStudentId('');
    setIsPresent(true);
  };

  return (
    <div className="attendance-form">
      <h2>Mark Attendance</h2>
      <div className="form-group">
        <label htmlFor="studentId">Select Student:</label>
        <select
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option value="">Select a student</option>
          {/* Replace with options generated from your student data */}
        </select>
      </div>
      <div className="form-group">
        <label>
          Attendance Status:
          <input
            type="radio"
            name="attendanceStatus"
            value="present"
            checked={isPresent}
            onChange={() => setIsPresent(true)}
          />
          Present
        </label>
        <label>
          <input
            type="radio"
            name="attendanceStatus"
            value="absent"
            checked={!isPresent}
            onChange={() => setIsPresent(false)}
          />
          Absent
        </label>
      </div>
      <button onClick={handleMarkAttendance}>Submit</button>
    </div>
  );
}

export default AttendanceForm;
