const trackerForm = document.getElementById('trackerForm');
const resultDisplay = document.getElementById('caloriesResult');

trackerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const exerciseType = document.getElementById('exerciseType').value;
    const duration = parseFloat(document.getElementById('exerciseDuration').value);
    const calorieRates = { running: 10, cycling: 8, yoga: 3 };

    if (calorieRates[exerciseType] && duration > 0) {
        const caloriesBurned = calorieRates[exerciseType] * duration;
        resultDisplay.textContent = `You burned ${caloriesBurned} calories!`;
    } else {
        resultDisplay.textContent = 'Please enter valid inputs.';
    }
});
