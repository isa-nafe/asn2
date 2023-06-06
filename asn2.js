const studentData = [
    {
      name: 'Student 1',
      weight: '150 lbs',
      height: '65 inches',
      hairColor: 'blonde',
      gpa: '3.5'
    },
    {
      name: 'Student 2',
      weight: '130 lbs',
      height: '63 inches',
      hairColor: 'brown',
      gpa: '3.2'
    },
    {
      name: 'Student 3',
      weight: '170 lbs',
      height: '68 inches',
      hairColor: 'black',
      gpa: '3.8'
    }
  ];
  
  const studentBoxesContainer = document.getElementById('student-boxes');
  
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
  