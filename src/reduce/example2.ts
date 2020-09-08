import { groupBy, flatten, flatMap } from "lodash";

type Employee = {
    name: string;
    last: string;
    salary: number;
    department: string;
}

const employees = [
    { name: "pedro", last: "Perez", salary: 200, department: "sales" },
    { name: "juan", last: "Gomez", salary: 300, department: "marketing" },
    { name: "thomas", last: "Perez", salary: 500, department: "marketing" },
].concat({ name: "Mirko", last: "Juanez", salary: 300, department: "sales" }) as Employee[]

const employeesByDepartment = groupBy(employees, "department");

console.log("TCL: ------------------------------------------------")
console.log("TCL: employeesByDepartment", employeesByDepartment)
console.log("TCL: ------------------------------------------------")

const flattenEmployees = flatMap(employeesByDepartment)
console.log("TCL: --------------------------------------")
console.log("TCL: flattenEmployees", flattenEmployees)
console.log("TCL: --------------------------------------")