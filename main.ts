import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudent } from './dataStudent.js';


let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCreditos: HTMLElement = document.getElementById("button-filterByCreditos")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const maxCred: HTMLInputElement = <HTMLInputElement> document.getElementById("maxCred")!;
const minCred: HTMLInputElement = <HTMLInputElement> document.getElementById("minCred")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCreditos.onclick = () => applyFilterByCredito();

renderCoursesInTable(dataCourses);

renderStudentInTable(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderStudentInTable(students: Student[]): void {
    console.log('Desplegando estduaint');
    students.forEach((student) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>Codigo</td>
                             <td>${student.codigo}</td>`;
      studentTbody.appendChild(trElement);
      let trElement2 = document.createElement("tr");
      trElement2.innerHTML = `<td>Cedula</td>
                             <td>${student.cedula}</td>`;
      studentTbody.appendChild(trElement2);
      let trElement3 = document.createElement("tr");
      trElement3.innerHTML = `<td>Edad</td>
                             <td>${student.edad}</td>`;
      studentTbody.appendChild(trElement3);
      let trElement4 = document.createElement("tr");
      trElement4.innerHTML = `<td>Direccion</td>
                             <td>${student.direccion}</td>`;
      studentTbody.appendChild(trElement4);
      let trElement5 = document.createElement("tr");
      trElement5.innerHTML = `<td>Telefono</td>
                             <td>${student.telefono}</td>`;
      studentTbody.appendChild(trElement5);
    });
  }

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredito() { 
    let max =+maxCred.value;
    let min=+minCred.value; 
        clearCoursesInTable();
        console.log(max+""+min);
        if(max>0&&min>0){
    let coursesFiltered: Course[] = searchCourseByCreditos(max,min, dataCourses);
    renderCoursesInTable(coursesFiltered);
        }
    
  }

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCreditos(max: number,min:number, courses: Course[]) {
       let greaterThan = courses.filter(course => course.credits <= max &&course.credits>=min);
       return greaterThan;
  }


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}