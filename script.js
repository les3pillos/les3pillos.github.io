document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        
        // Random size
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = 'rgba(255, 255, 255, 0.1)';
        particle.style.borderRadius = '50%';
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add keyframes for particles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-100px) translateX(50px); }
            100% { transform: translateY(-200px) translateX(-50px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
