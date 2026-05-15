let students = JSON.parse(localStorage.getItem("students")) || [];

const studentName = document.getElementById("studentName");
const studentGrade = document.getElementById("studentGrade");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentList = document.getElementById("studentList");
const averageGrade = document.getElementById("averageGrade");

addStudentBtn.addEventListener("click", addStudent);

function isValidName(name) {
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    return name.trim().length > 0 && namePattern.test(name);
}

function addStudent() {
    const name = studentName.value.trim();
    const grade = Number(studentGrade.value);

    if (!name) {
        alert("Student name cannot be empty.");
        return;
    }

    if (!isValidName(name)) {
        alert("Student name must contain only letters, spaces, apostrophes, and hyphens.");
        return;
    }

    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100.");
        return;
    }

    students.push({
        id: Date.now(),
        name,
        grade
    });

    saveToLocalStorage();
    renderStudents();

    studentName.value = "";
    studentGrade.value = "";
}

function renderStudents() {
    studentList.innerHTML = "";
    const avg = calculateAverage();

    students.forEach(student => {
        const row = document.createElement("tr");

        if (student.grade > avg) {
            row.classList.add("above-average");
        }

        // Create cells safely using textContent instead of innerHTML
        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const gradeCell = document.createElement("td");
        gradeCell.textContent = student.grade;

        const actionCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            if (confirm(`Are you sure you want to delete ${student.name}?`)) {
                deleteStudent(student.id);
            }
        });

        actionCell.appendChild(deleteBtn);

        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        row.appendChild(actionCell);

        studentList.appendChild(row);
    });

    averageGrade.textContent = avg.toFixed(2);
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    saveToLocalStorage();
    renderStudents();
}

function calculateAverage() {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return total / students.length;
}

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

renderStudents();
