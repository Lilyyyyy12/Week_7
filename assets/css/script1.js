function checkBag() {
    let bag = document.getElementById("bag").value;
    let result = document.getElementById("result");

    switch (bag) {
        case "small":
            result.innerHTML = "Expense is ₦500";
            break;

        case "medium":
            result.innerHTML = "Expense is ₦1000";
            break;

        case "large":
            result.innerHTML = "Expense is ₦1500";
            break;

        default:
            result.innerHTML = "Invalid bag size";
    }
}