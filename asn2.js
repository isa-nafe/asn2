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
  
  displayStudentBoxes();
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
