const startButton = document.getElementById('start-button');
const expandedButtons = document.getElementById('expanded-buttons');

startButton.addEventListener('mouseenter', () => {
    expandedButtons.style.display = 'block'; // Show expanded buttons
    startButton.style.display = 'none'; // Hide the start button
});

expandedButtons.addEventListener('mouseleave', () => {
    expandedButtons.style.display = 'none'; // Hide expanded buttons
    startButton.style.display = 'block'; // Show the start button
});