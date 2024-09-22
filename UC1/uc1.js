// UC1: Check Employee is Present or Absent
const IS_PRESENT = 1;

function checkAttendance() {
    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1
    if (attendance === IS_PRESENT) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}

// Invoke function to check attendance
checkAttendance();
