function checkValue() {
    let value = document.getElementById("myValue").value;
    let message = document.getElementById("message");

    if (value === "" || isNaN(value)) {
        message.innerHTML = "Wrong value! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Correct value! Well done.";
        message.style.color = "green";
    }
}