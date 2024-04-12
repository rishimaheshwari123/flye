function checkValue(elementId) {
    var value = document.getElementById(elementId).value;
    var warningIcon = document.querySelector("#" + elementId + " + .warning-popup");
    if (isNaN(value) || value.trim() === "") {
        warningIcon.style.display = "inline";
    } else {
        warningIcon.style.display = "none";
    }
}

function taxcalculation(event) {
    event.preventDefault();
    var grossincome = document.getElementById("grossincome").value;
    var extraincome = document.getElementById("extraincome").value;
    var agegroup = document.getElementById("agegroup").value;
    var deductions = document.getElementById("deductions").value;

    if (grossincome.trim() === "") {
        checkValue("grossincome");
        return;
    }
    else if (extraincome.trim() === "") {
        checkValue("extraincome");
        return;
    }
    else if (agegroup.trim() === "" || agegroup == "0") {
        querypopup2();
        return;
    }
    else if (deductions.trim() === "") {
        checkValue("deductions");
        return;
    }

    var totalIncome = Number(grossincome) + Number(extraincome) - Number(deductions);

    var tax = 0;
    if (totalIncome > 800000) {
        if (agegroup == "1") {
            tax = 0.3 * (totalIncome - 800000);
        } else if (agegroup == "2") {
            tax = 0.4 * (totalIncome - 800000);
        } else if (agegroup == "3") {
            tax = 0.1 * (totalIncome - 800000);
        }
    }

    var formattedTax = "₹ " + (totalIncome - tax).toLocaleString("en-IN");
    document.getElementById("popup-content").innerHTML = formattedTax;
    document.getElementById("popup").classList.add("show");
}


function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

document.getElementById("grossincome").addEventListener("input", function () {
    checkValue("grossincome");
});
document.getElementById("extraincome").addEventListener("input", function () {
    checkValue("extraincome");
});
document.getElementById("deductions").addEventListener("input", function () {
    checkValue("deductions");
});

function warningpopup() {
    var popup = document.getElementById("warning-Popup");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 2000);
}

function warningpopup1() {
    var popup = document.getElementById("warning-Popup1");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 2000);
}

function warningpopup2() {
    var popup = document.getElementById("warning-Popup2");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 2000);
}



function querypopup() {
    var popup = document.getElementById("query-Popup");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 5000);
}

function querypopup1() {
    var popup = document.getElementById("query-Popup1");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 5000);
}

function querypopup2() {
    var popup = document.getElementById("query-Popup2");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 5000);
}

function querypopup3() {
    var popup = document.getElementById("query-Popup3");
    popup.classList.toggle("show");

    setTimeout(function () {
        popup.classList.remove("show");
    }, 5000);
}

