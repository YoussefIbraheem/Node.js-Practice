// Simple functionality for demonstration purposes

// Display an alert when the button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const buttonText = event.target.textContent.trim();
            alert(`You clicked: "${buttonText}"`);
        });
    });

    // Dynamic footer message
    const footer = document.createElement('footer');
    footer.textContent = `This is a dynamically added footer. Loaded on: ${new Date().toLocaleString()}`;
    footer.style.textAlign = 'center';
    footer.style.marginTop = '20px';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    document.body.appendChild(footer);
});
