function crudeOilPrice(price, barrels) {
    return price / barrels;
}

function calculatePrice() {
    let price = Number(document.getElementById("price").value);
    let barrels = Number(document.getElementById("barrels").value);

    let answer = crudeOilPrice(price, barrels);

    document.getElementById("answer").innerHTML =
        "Price per barrel is ₦" + answer;
}