var editFirstNumber     = document.getElementById("editFirstNumber");
var editSecondNumber    = document.getElementById("editSecondNumber");
var buttonAddNumbers    = document.getElementById('buttonAddNumbers');
var pOutput             = document.getElementById('pOutput');

buttonAddNumbers.onclick = function() {
    var firstNumber = Number(editFirstNumber.value);
    var secondNumber = Number(editSecondNumber.value);

    pOutput.textContent = "the sum of the numbers is " + String(firstNumber + secondNumber);
};
