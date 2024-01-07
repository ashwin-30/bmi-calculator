// Function to calculate BMI
function calculateBmi() {
    // Get form input values
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);   
    const heightInches = parseInt(document.getElementById('height-inches').value);   
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate form inputs
    if(gender && age && heightFeet && heightInches && weight) {
        // Calculate height in meters
        const heightInMeters = ((heightFeet*12)+heightInches)*0.0254;

        // Calculate BMI
        const bmi = weight/(heightInMeters*heightInMeters);
               
        // Display BMI result
        let result = document.getElementById("result");
        let category = '';
        
        // Categorize based on gender
        if (gender === 'male') {
            if(bmi < 18.5) {
                category = 'Underweight';
            }
            else if(bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal Weight';
            }
            else if(bmi >= 24.9 && bmi < 29.9) {
                category = 'Overweight';
            }
            else {
                category = 'Obesity';
            }
        } else if (gender === 'female') {
            if(bmi < 18.5) {
                category = 'Underweight';
            }
            else if(bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal Weight';
            }
            else if(bmi >= 24.9 && bmi < 29.9) {
                category = 'Overweight';
            }
            else {
                category = 'Obesity';
            }
        }

        result.textContent = `Your BMI is ${bmi.toFixed(2)} and you are categorized as ${category}.`;
    }
}

// Attach event listener to form submission
document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    calculateBmi();
});
