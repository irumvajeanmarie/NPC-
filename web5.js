// Predefined list of students, initialized by the developer
const students = [
    "BIKORIMANA Jean Nepo",
    "HIRWA Fabrice",
    "HIRWA Olivier",
    "IGIHOZO Divine",
    "IRUMVA Jean Claude",
    "IRUMVA Jean Marie",
    "ISHIMWE Amos",
    "KATUSHABE Appophia",
    "KAYIGAMBA David",
    "MANIRAFASHA Antoine",
    "MANZI Stiven",
    "MUCYO Aime Maxime",
    "MUGISHA Tresor",
    "MUHIRWA Justin",
    "MUNOZA Louis",
    "MUNYABUGINGO Olivier",
    "MUPENZI Fulgence",
    "MUSONERA Richard",
    "MUTABAZI Philemon",
    "MUTERUZI Dan",
    "NDAYISHIMIYE Issa",
    "NDIKUMANA Venuste",
    "NDIZEYE Ashel",
    "NGABO Elyse",
    "NIYITEGEKA Jean Paul",
    "NIYOMUGABO Eduard",
    "NIYONSHUTI Alpha",
    "RUGERA Nobel",
    "SHYAKA David",
    "TAREMWA Sam",
    "TUYIZERE Charles",
    "UWAMAHORO Aline",
    "UWAMAHORO Joseline",
    "UWASE Divine"
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
