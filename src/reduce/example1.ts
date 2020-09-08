import { keyBy } from "lodash";

const array = [1,2,3,4,5];

const result = array.reduce((memo, current) => memo += current + 1);

console.log("Result: ", result);

const employees = [
    { name: "pedro", last:"Perez", salary: 200 },
    { name: "juan", last:"Gomez", salary: 300 }
]

const salarySum = employees.reduce((memo, employee) => {
    memo.sumSalaries += employee.salary;
    return memo;
},{sumSalaries:0})

console.log("TCL: ------------------------")
console.log("TCL: salarySum", salarySum)
console.log("TCL: ------------------------")

//complex reducer
const employeesWithAllSalaries = [
    { name: "pedro", last:"Perez", salaries: [100,200,300] },
    { name: "juan", last:"Gomez", salaries: [400, 500] }
]

type memo = {name: string, sumSalaries: number};

const salaryPerEmployeeSum = employeesWithAllSalaries.reduce((memo: memo[], employee) => {
    const sumSalaries = employee.salaries.reduce((memo, acc) => memo += acc);
    memo.push({name: employee.name, sumSalaries });
    return memo;
},[]);

console.log("---- salaryPerEmployeeSum ----");
console.log(salaryPerEmployeeSum);

const salaryPerEmployeeSum2 = employeesWithAllSalaries.reduce((memo: {name: string, sumSalaries: number}[], employee) => {
    const sumSalaries = employee.salaries.reduce((memo, acc) => memo += acc);
    memo.push({name: employee.name, sumSalaries });
    return memo;
},[]);

console.log("---- salaryPerEmployeeSum2 ----");
console.log(salaryPerEmployeeSum2[0].name);

const recipeTree = [
    { name: "pedro", last:"Perez", salary: 200, department: "sales" },
    { name: "juan", last:"Gomez", salary: 300, department: "enge"}
]

const salaryPerEmployeeMap = employeesWithAllSalaries.reduce((memo: {[name: string] : number}, employee) => {
    const sumSalaries = employee.salaries.reduce((memo, acc) => memo += acc);
    memo[employee.name] = sumSalaries;
    return memo;
},{});
console.log("TCL: ----------------------------------------------")
console.log("TCL: salaryPerEmployeeMap", salaryPerEmployeeMap)
console.log("TCL: ----------------------------------------------")