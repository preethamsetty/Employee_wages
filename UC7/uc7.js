// UC7: Refactor the Code to Use Class Method and Class Variables

class EmployeeWage {
    constructor() {
        this.totalWage = 0;
        this.totalHours = 0;
        this.totalDays = 0;
        this.MAX_WORKING_DAYS = 20;
        this.MAX_WORKING_HOURS = 100;
    }

    getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            default:
                return 0;
        }
    }

    computeWage() {
        while (this.totalDays < this.MAX_WORKING_DAYS && this.totalHours < this.MAX_WORKING_HOURS) {
            this.totalDays++;
            let empCheck = Math.floor(Math.random() * 3); // 0, 1, or 2 (Absent, Full-time, or Part-time)
            let empHours = this.getWorkingHours(empCheck);
            this.totalHours += empHours;
            let dailyWage = empHours * WAGE_PER_HOUR;
            this.totalWage += dailyWage;
        }
        console.log(`Total Days: ${this.totalDays}, Total Hours: ${this.totalHours}`);
        console.log(`Total Wage: $${this.totalWage}`);
    }
}

// Create an instance of EmployeeWage class and compute the wage
let employee = new EmployeeWage();
employee.computeWage();
