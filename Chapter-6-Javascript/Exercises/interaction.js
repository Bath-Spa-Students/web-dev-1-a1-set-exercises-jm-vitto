function Cost() {
    var fuel = parseFloat(document.getElementById('gas').value);
    var distance = parseFloat(document.getElementById('km').value);

    // Total Price
    var cost = (distance * fuel).toFixed(2);

    // Show result
    document.getElementById('cost').innerHTML = 'Total price:' + cost; + 'AED'
}