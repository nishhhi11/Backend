// Function to calculate the grade based on score
function getGrade(score) {

    /*
    Check the score range
    and return the corresponding grade.
    */

    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

console.log("Grade: " + getGrade(85));