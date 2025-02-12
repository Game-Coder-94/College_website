document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            let rect = card.getBoundingClientRect();
            let x = (e.clientX - rect.left) / rect.width - 0.5;
            let y = (e.clientY - rect.top) / rect.height - 0.5;

            const tiltX = -y * 20; // Adjust tilt intensity
            const tiltY = x * 20;

            // Apply tilt + hover effect
            card.style.transform = `perspective(500px) scale(1.1) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(500px) translateY(0px) rotateX(0deg) rotateY(0deg)';
        });
    });
});