// UC3: Add Part-time Employee & Wage
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;

function calculateEmployeeWage() {
    let empHours = 0;
    let empCheck = Math.floor(Math.random() * 3); // 0, 1, or 2 (Absent, Full-time, or Part-time)
    switch (empCheck) {
        case IS_FULL_TIME:
            empHours = FULL_TIME_HOURS;
            console.log("Employee is Full-time");
            break;
        case IS_PART_TIME:
            empHours = PART_TIME_HOURS;
            console.log("Employee is Part-time");
            break;
        default:
            empHours = 0;
            console.log("Employee is Absent");
            break;
    }
    let dailyWage = empHours * WAGE_PER_HOUR;
    console.log("Daily Wage: $" + dailyWage);
}

calculateEmployeeWage();
