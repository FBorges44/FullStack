const area = document.getElementById('reveal-area');
const userLayer = document.querySelector('.layer-user');

area.addEventListener('mousemove', (e) => {
    const rect = area.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Atualiza a máscara em tempo real
    userLayer.style.setProperty('--mx', `${x}%`);
    userLayer.style.setProperty('--my', `${y}%`);
});

// Efeito de Glitch no Título ao passar o mouse
const title = document.querySelector('.main-title');
title.addEventListener('mouseover', () => {
    title.style.transform = 'skewX(-10deg)';
    title.style.textShadow = '4px 0 #ff0000, -4px 0 #00d4ff';
    setTimeout(() => {
        title.style.transform = 'none';
        title.style.textShadow = 'none';
    }, 150);
});