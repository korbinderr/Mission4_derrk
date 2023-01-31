$("#btnCalculate").click(function () {
    var assign = $("#assign").val() *.5;
    var group = $("#group").val() * .1;
    var quiz = $("#quiz").val() * .1;
    var midterm = $("#midterm").val() * .1;
    var final = $("#final").val() * .1;
    var intex = $("#intex").val() * .1;

    var numGrade = (assign + group + quiz + midterm + final + intex);
    var letGrade = "";

    if (numGrade >= 94) {
        letGrade = "A"
    }
    else if (numGrade >= 90) {
        letGrade = "A-"
    }
    else if (numGrade >= 90) {
        letGrade = "A-"
    }
    else if (numGrade >=87) {
        letGrade = "B+"
    }
    else if (numGrade >= 84) {
        letGrade = "B"
    }
    else if (numGrade >= 80) {
        letGrade = "B-"
    }
    else if (numGrade >= 77) {
        letGrade = "C+"
    }
    else if (numGrade >= 74) {
        letGrade = "C"
    }
    else if (numGrade >= 70) {
        letGrade = "C-"
    }
    else if (numGrade >= 67) {
        letGrade = "D+"
    }
    else if (numGrade >= 64) {
        letGrade = "D"
    }
    else if (numGrade >= 60) {
        letGrade = "D-"
    }
    else {
        letGrade = "E"
    }

    $("#output").text("You got a " + numGrade.toFixed(2) + " overall: " + letGrade);
    document.querySelector("h3#output").scrollIntoView({ behavior: 'smooth' });
})