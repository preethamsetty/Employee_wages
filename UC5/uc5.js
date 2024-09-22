// UC5: Calculating Wages for a Month (Assume 20 Working Days)
const WORKING_DAYS_PER_MONTH = 20;

function calculateMonthlyWage() {
    let totalWage = 0;
    for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
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
        let dailyWage = empHours * WAGE_PER_HOUR;
        totalWage += dailyWage;
    }
    console.log("Total Wage for the Month: $" + totalWage);
}

calculateMonthlyWage();
