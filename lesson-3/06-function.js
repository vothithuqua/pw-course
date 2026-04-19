// Bài 1
function multiply(a, b) {
    console.log(`Kết quả của ${a} * ${b} = ${a * b}`);
}
multiply(2, 3);
multiply(4, 5);

// Bài 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log("Giá trị nhỏ nhất trong dãy số là", min);
}
findMin(10, 9, 4);
findMin(8, 5, 7);

// Bài 3
const students = [
    { name: "student A", score: 8 },
    { name: "student B", score: 7 },
    { name: "student C", score: 10 }
];

function getTopStudents(students, threshold) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}

console.log(getTopStudents(students, 8));

// Bài 4
function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate *years) / 100;
    return total;
}
const tongtien = calculateInterest(50000000,10,5);
console.log("Tổng tiền là: ",tongtien );