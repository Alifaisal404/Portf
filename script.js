document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-mode');
    const currentMode = localStorage.getItem('theme') || 'light';

    // Apply the current theme from localStorage
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    // Event listener for the toggle button
    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});