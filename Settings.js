document.addEventListener('DOMContentLoaded', () => {
    const saveSettingsButton = document.getElementById('save-settings');

    saveSettingsButton.addEventListener('click', () => {
        // Display alert
        alert('Settings are now saved.');

        // Redirect to dashboard
        window.location.href = 'Dashboard.html';
    });
});