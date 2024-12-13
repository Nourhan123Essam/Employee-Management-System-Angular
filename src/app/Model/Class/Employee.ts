export class Employee{
    employeeId: string;
    name: string;
    email: string;
    phone: string;
    hireDate: Date;
    address: string;
    salary: number;
    isActive: boolean
    createdAt: Date;
    roleId: number;
    designationId: number;
    role: string;
    designation: string;

    constructor(){
        this.email = "";
        this.employeeId = "";
        this.name = "";
        this.phone = "";
        this.hireDate = new Date();
        this.address = "";
        this.salary = 0;
        this.isActive = false;
        this.createdAt = new Date();
        this.roleId = 0;
        this.designationId = 0;
        this.role = "";
        this.designation = "";
    }
}
