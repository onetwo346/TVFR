// Intro Page: No additional JS needed, button links directly to options.html

// Options Page: Handle form submission and payment simulation
document.getElementById('avatar-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate payment (replace with real payment API like Stripe)
    const paymentConfirmed = confirm('Pay $1 to unlock the full experience?');
    if (!paymentConfirmed) return;

    // Collect form data
    const formData = {
        faceScan: document.getElementById('face-scan').checked,
        height: document.querySelector('input[placeholder="Height (cm)"]').value,
        weight: document.querySelector('input[placeholder="Weight (kg)"]').value,
        gender: document.querySelector('select').value,
        skinColor: document.querySelector('input[placeholder="Skin Color"]').value,
        bodyShape: document.querySelector('input[placeholder="Body Shape"]').value,
        clothing: document.getElementById('clothing-upload').files[0]
    };

    // Save to localStorage (simulate AI saving data)
    localStorage.setItem('avatarData', JSON.stringify(formData));

    // Redirect to fitting room
    window.location.href = 'fitting-room.html';
});

// Fitting Room Page: Avatar preview and mode toggle
let isFreeMode = false;

window.onload = () => {
    const avatarData = JSON.parse(localStorage.getItem('avatarData'));
    if (avatarData && avatarData.clothing) {
        const clothingUrl = URL.createObjectURL(avatarData.clothing);
        document.getElementById('avatar-preview').src = clothingUrl; // Placeholder for 3D avatar
    }
};

function toggleMode() {
    isFreeMode = !isFreeMode;
    document.getElementById('mode-status').textContent = isFreeMode ? 'Mode: Free Simulation' : 'Mode: Auto-Modeling';
    // Add 3D control logic here (e.g., with Three.js)
}
