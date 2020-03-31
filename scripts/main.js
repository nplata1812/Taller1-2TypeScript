import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCreditos = document.getElementById("button-filterByCreditos");
var inputSearchBox = document.getElementById("search-box");
var maxCred = document.getElementById("maxCred");
var minCred = document.getElementById("minCred");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCreditos.onclick = function () { return applyFilterByCredito(); };
renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderStudentInTable(students) {
    console.log('Desplegando estduaint');
    students.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>Codigo</td>\n                             <td>" + student.codigo + "</td>";
        studentTbody.appendChild(trElement);
        var trElement2 = document.createElement("tr");
        trElement2.innerHTML = "<td>Cedula</td>\n                             <td>" + student.cedula + "</td>";
        studentTbody.appendChild(trElement2);
        var trElement3 = document.createElement("tr");
        trElement3.innerHTML = "<td>Edad</td>\n                             <td>" + student.edad + "</td>";
        studentTbody.appendChild(trElement3);
        var trElement4 = document.createElement("tr");
        trElement4.innerHTML = "<td>Direccion</td>\n                             <td>" + student.direccion + "</td>";
        studentTbody.appendChild(trElement4);
        var trElement5 = document.createElement("tr");
        trElement5.innerHTML = "<td>Telefono</td>\n                             <td>" + student.telefono + "</td>";
        studentTbody.appendChild(trElement5);
    });
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredito() {
    var max = +maxCred.value;
    var min = +minCred.value;
    clearCoursesInTable();
    console.log(max + "" + min);
    if (max > 0 && min > 0) {
        var coursesFiltered = searchCourseByCreditos(max, min, dataCourses);
        renderCoursesInTable(coursesFiltered);
    }
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCreditos(max, min, courses) {
    var greaterThan = courses.filter(function (course) { return course.credits <= max && course.credits >= min; });
    return greaterThan;
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
