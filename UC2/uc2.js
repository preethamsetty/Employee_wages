// UC2: Calculate Daily Employee Wage
const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

function calculateDailyWage() {
    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1
    if (attendance === IS_PRESENT) {
        let dailyWage = WAGE_PER_HOUR * FULL_DAY_HOURS;
        console.log("Employee is Present. Daily Wage: $" + dailyWage);
    } else {
        console.log("Employee is Absent. Daily Wage: $0");
    }
}

// Invoke function to calculate daily wage
calculateDailyWage();
