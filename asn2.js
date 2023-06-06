const studentData = [];

function addStudent() {
  const nameInput = document.querySelector('.name-input');
  const weightInput = document.querySelector('.weight-input');
  const heightInput = document.querySelector('.height-input');
  const hairColorInput = document.querySelector('.hair-color-input');
  const gpaInput = document.querySelector('.gpa-input');

  const student = {
    name: nameInput.value,
    weight: weightInput.value,
    height: heightInput.value,
    hairColor: hairColorInput.value,
    gpa: gpaInput.value
  };

  studentData.push(student);

  nameInput.value = '';
  weightInput.value = '';
  heightInput.value = '';
  hairColorInput.value = '';
  gpaInput.value = '';

  displayStudentsTable();
  displayStudentBoxes();
}

function deleteStudent(index) {
  studentData.splice(index, 1);
  displayStudentsTable();
  displayStudentBoxes();
}

function displayStudentsTable() {
  const studentsTableBody = document.getElementById('students-table-body');
  studentsTableBody.innerHTML = '';

  studentData.forEach((student, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const weightCell = document.createElement('td');
    weightCell.textContent = student.weight;
    row.appendChild(weightCell);

    const heightCell = document.createElement('td');
    heightCell.textContent = student.height;
    row.appendChild(heightCell);

    const hairColorCell = document.createElement('td');
    hairColorCell.textContent = student.hairColor;
    row.appendChild(hairColorCell);

    const gpaCell = document.createElement('td');
    gpaCell.textContent = student.gpa;
    row.appendChild(gpaCell);

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteStudent(index));
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    studentsTableBody.appendChild(row);
  });
}

function displayStudentBoxes() {
  const studentBoxesContainer = document.getElementById('student-boxes');
  studentBoxesContainer.innerHTML = '';

  studentData.forEach(student => {
    const box = document.createElement('div');
    box.className = 'student-box';
    box.style.backgroundColor = student.hairColor;
    box.style.height = `${parseInt(student.height)}px`;
    box.style.width = `${parseInt(student.weight)}px`;

    const name = document.createElement('span');
    name.textContent = student.name;

    const gpa = document.createElement('span');
    gpa.textContent = `${student.gpa} GPA`;

    box.appendChild(name);
    box.appendChild(document.createElement('br'));
    box.appendChild(gpa);

    studentBoxesContainer.appendChild(box);
  });
}
