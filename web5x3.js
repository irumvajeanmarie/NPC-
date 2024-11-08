// Predefined list of students, initialized by the developer
const students = [
    "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", 
    "Chris Brown", "Jessica Wilson", "Daniel Martinez", "Sophia Anderson", 
    "James Taylor", "Grace Thomas", "Samuel Lee", "Olivia Jackson",
    "Lucas White", "Emma Harris", "David Clark", "Lily Lewis",
    "Henry Hall", "Mia Young", "Ethan Allen", "Ava King",
    "Matthew Scott", "Isabella Wright", "Andrew Adams", "Charlotte Baker",
    "Benjamin Turner", "Amelia Hill", "Jack Torres", "Zoe Perez",
    "Ryan Carter", "Abigail Collins", "Nathan Mitchell", "Ella Roberts",
    "Alexander Evans", "Samantha Stewart"
];

// Function to dynamically generate the list of students
function generateStudentList() {
    const studentList = document.getElementById("student-list");
    students.forEach((student, index) => {
        const listItem = document.createElement("li");
        listItem.className = "student-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `student${index + 1}`;
        checkbox.name = "students";
        checkbox.value = student;

        const label = document.createElement("label");
        label.htmlFor = `student${index + 1}`;
        label.innerText = student;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        studentList.appendChild(listItem);
    });
}

// Toggle all student checkboxes based on the "Select All" checkbox
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById("select-all");
    const checkboxes = document.querySelectorAll('.student-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// Handle submission for different groups
function handleGroupSubmit(groupName) {
    const selectedStudents = [];
    const checkboxes = document.querySelectorAll('.student-item input[type="checkbox"]:checked');

    // Collect selected students
    checkboxes.forEach(checkbox => {
        selectedStudents.push(checkbox.value);
    });

    // Store selected students in localStorage with a unique key for the group
    localStorage.setItem(`${groupName}_students`, JSON.stringify(selectedStudents));

    // Redirect to web5x.html
    window.location.href = 'web5x.html';
}

// Generate the student list when the page loads
window.onload = generateStudentList;
