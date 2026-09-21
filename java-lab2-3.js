const students = [
    { name: "Анна", grade: 5},
    { name: "Иван", grade: 3},
    { name: "Мария", grade: 4},
    { name: "Петр", grade: 2},
    { name: "Ольга", grade: 5}
]
function filtergrade(students, min) {
    return students.filter(s => s.grade > min);
}
function sred(students) {
    const sum = students.reduce((acc, s) => acc + s.grade, 0);
    return sum / students.length;
}
console.log("Выше 3: ", filtergrade(students, 3));
console.log("Средняя оценка: ", sred(students));