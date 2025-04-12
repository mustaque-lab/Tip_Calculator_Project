
function calculateTip() {
    const billAmount = parseFloat(document.getElementById("bill").value);
    const service = parseFloat(document.getElementById("service").value);
    const people = parseFloat(document.getElementById("people").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount!!");
        return;
    }

    if (people < 1) {
        alert("Please enter at least 1 person!!");
    }

    const tipAmount = billAmount * service;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / people;
    const tipPerPerson = tipAmount / people;

    document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("perPerson").textContent = `$${perPerson.toFixed(2)}`;
    document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
}

document.getElementById("calculate-btn").addEventListener("click", calculateTip);

const allEls = document.querySelectorAll("input,select").forEach((el) => {
    el.addEventListener('input', calculateTip);
});

















