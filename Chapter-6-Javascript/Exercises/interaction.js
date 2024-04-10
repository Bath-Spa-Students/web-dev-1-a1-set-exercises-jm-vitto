function calculateTotalPrice() {
    var fuel = parseFloat(document.getElementById('gas').value);
    var fuelType = document.getElementById('fuelType').value;
    var pricePerLiter;

    // Set price per liter based on selected fuel type
    switch (fuelType) {
        case 'eplus91':
            pricePerLiter = 2.96;
            break;
        case 'special95':
            pricePerLiter = 3.03;
            break;
        case 'super98':
            pricePerLiter = 3.15;
            break;
        case 'diesel':
            pricePerLiter = 3.09;
            break;
        default:
            // Default to 0 if no fuel type selected
            pricePerLiter = 0;
    }

    // Calculate total price
    var cost = (fuel * pricePerLiter).toFixed(2);

    // Show result
    document.getElementById('cost').innerHTML = 'Total price: ' + cost + ' AED';
}
