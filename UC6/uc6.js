// UC6: Calculate Wages till a Condition of Total Working Hours or Days is Reached
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;

function calculateWageUntilCondition() {
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        totalDays++;
        let empHours = 0;
        let empCheck = Math.floor(Math.random() * 3); // 0, 1, or 2 (Absent, Full-time, or Part-time)
        switch (empCheck) {
            case IS_FULL_TIME:
                empHours = FULL_TIME_HOURS;
                break;
            case IS_PART_TIME:
                empHours = PART_TIME_HOURS;
                break;
            default:
                empHours = 0;
                break;
        }
        totalHours += empHours;
        let dailyWage = empHours * WAGE_PER_HOUR;
        totalWage += dailyWage;
    }

    console.log("Total Days: " + totalDays + " | Total Hours: " + totalHours);
    console.log("Total Wage: $" + totalWage);
}

calculateWageUntilCondition();
