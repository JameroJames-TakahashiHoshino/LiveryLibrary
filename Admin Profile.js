 // Function to redirect to the dashboard
 function goToDashboard() {
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
}

// Add event listener to the button
document.getElementById('dashboardButton').addEventListener('click', goToDashboard);