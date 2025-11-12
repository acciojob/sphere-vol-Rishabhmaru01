function volume_sphere() {
    // Get the radius value from the input field
    const radius = document.getElementById("radius").value;

    // Convert to a number
    const r = parseFloat(radius);

    // Validate input: must be a non-negative number
    if (isNaN(r) || r < 0) {
        document.getElementById("volume").value = "NaN";
    } else {
        // Calculate the volume using formula (4/3) * π * r³
        const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

        // Display result rounded to 4 decimal places
        document.getElementById("volume").value = volume.toFixed(4);
    }

    // Prevent form from submitting and reloading the page
    return false;
}

window.onload = function() {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
