// Simple Data Storage
let students = [];
let teachers = [];
let classes = [];
let attendanceRecords = [];
let notices = [];

// Show the section based on button clicks
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Add Student Function
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    const student = { name, age, grade };
    students.push(student);

    updateStudentList();
    clearForm('studentForm');
});

// Update the Students List
function updateStudentList() {
    const studentsTable = document.getElementById('studentsTable');
    studentsTable.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        studentsTable.appendChild(row);
    });

    // Update dashboard data
    document.getElementById('totalStudents').textContent = students.length;
}

// Add Teacher Function
document.getElementById('teacherForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('teacherName').value;
    const subject = document.getElementById('subject').value;
    const contact = document.getElementById('contact').value;

    const teacher = { name, subject, contact };
    teachers.push(teacher);

    updateTeacherList();
    clearForm('teacherForm');
});

// Update the Teacher List
function updateTeacherList() {
    const teachersTable = document.getElementById('teachersTable');
    teachersTable.innerHTML = '';

    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.name}</td>
            <td>${teacher.subject}</td>
            <td>${teacher.contact}</td>
        `;
        teachersTable.appendChild(row);
    });

    // Update dashboard data
    document.getElementById('totalTeachers').textContent = teachers.length;
}

// Add Class Function
document.getElementById('classForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const className = document.getElementById('className').value;
    const numStudents = document.getElementById('numStudents').value;
    const assignedTeacher = document.getElementById('assignedTeacher').value;

    const classObj = { className, numStudents, assignedTeacher };
    classes.push(classObj);

    updateClassList();
    clearForm('classForm');
});

// Update the Class List
function updateClassList() {
    const classTable = document.getElementById('classTable');
    classTable.innerHTML = '';

    classes.forEach(classObj => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${classObj.className}</td>
            <td>${classObj.numStudents}</td>
            <td>${classObj.assignedTeacher}</td>
        `;
        classTable.appendChild(row);
    });

    // Update dashboard data
    document.getElementById('totalClasses').textContent = classes.length;
}

// Add Attendance Function
document.getElementById('attendanceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('attendanceDate').value;
    const attendanceStatus = [];
    document.querySelectorAll('.attendance-checkbox').forEach((checkbox) => {
        if (checkbox.checked) {
            attendanceStatus.push(checkbox.value);
        }
    });

    const attendanceRecord = { date, attendanceStatus };
    attendanceRecords.push(attendanceRecord);

    updateAttendanceRecords();
    clearForm('attendanceForm');
});

// Update Attendance Records
function updateAttendanceRecords() {
    const attendanceRecordsTable = document.getElementById('attendanceRecords');
    attendanceRecordsTable.innerHTML = '';

    attendanceRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.attendanceStatus.join(', ')}</td>
        `;
        attendanceRecordsTable.appendChild(row);
    });
}

// Add Notice Function
document.getElementById('noticeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const noticeText = document.getElementById('noticeText').value;
    const notice = { text: noticeText, date: new Date().toLocaleString() };
    notices.push(notice);

    updateNoticeBoard();
    clearForm('noticeForm');
});

// Update the Notice Board
function updateNoticeBoard() {
    const noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';

    notices.forEach(notice => {
        const li = document.createElement('li');
        li.innerHTML = `${notice.text} <span class="notice-date">(${notice.date})</span>`;
        noticeList.appendChild(li);
    });
}

// Clear the form inputs after submission
function clearForm(formId) {
    document.getElementById(formId).reset();
}

// Search Student Function
function searchStudents() {
    const searchTerm = document.getElementById('searchStudent').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm)
    );
    updateStudentList(filteredStudents);
}

// Dynamic Student List Update Based on Search
function updateStudentList(filteredStudents = students) {
    const studentsTable = document.getElementById('studentsTable');
    studentsTable.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        studentsTable.appendChild(row);
    });
}
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Math Exam',
                start: '2024-12-10'
            },
            {
                title: 'Winter Break',
                start: '2024-12-20',
                end: '2024-12-31'
            }
        ]
    });
});
function showNotification(message) {
    const notification = document.getElementById('realTimeNotifications');
    notification.querySelector('p').textContent = message;
    notification.classList.remove('hidden');
}

function closeNotification() {
    document.getElementById('realTimeNotifications').classList.add('hidden');
}
// JavaScript function to start the timer for online exams
let examTime = 120; // exam duration in minutes
function startExamTimer() {
    let timer = setInterval(function() {
        if (examTime <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        } else {
            document.getElementById('examTimer').innerHTML = `${examTime} minutes remaining`;
            examTime--;
        }
    }, 60000); // Update every minute
}
function changeProfilePicture() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        let reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profileImg').src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    input.click();
}
// FullCalendar integration
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Math Exam',
                start: '2024-12-01',
                description: 'Final exam for the Math subject'
            },
            {
                title: 'Parent-Teacher Meeting',
                start: '2024-12-10',
                description: 'Discuss student progress'
            },
            // Add more events here
        ]
    });
});
