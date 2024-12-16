document.addEventListener('DOMContentLoaded', function() {
    // Menú de navegación
    const menuItems = [
        { text: 'Inicio', href: '#inicio' },
        { text: 'Servicios', href: '#servicios' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Contacto', href: '#contacto' }
    ];

    function createMenu() {
        const navLinks = document.getElementById('navLinks');
        menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            a.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(item.href).scrollIntoView({
                    behavior: 'smooth'
                });
            });
            li.appendChild(a);
            navLinks.appendChild(li);
        });
    }

    // Formulario de soporte
    const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para enviar el formulario
            alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Código del slider infinito
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    
    // Clonar las primeras imágenes y añadirlas al final para crear el efecto infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
    });
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slideTrack.appendChild(clone);
});
    // Iniciar la animación
    slideTrack.style.animation = 'scroll 60s linear infinite';

    // Funciones de chat y contacto
    window.initChat = function() {
        const chatWidget = document.getElementById('chat-widget');
        chatWidget.classList.toggle('hidden');
    }

    window.scrollToContact = function() {
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Inicializar el menú
    createMenu();
});

// Funciones para el modal
function openAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.style.display = 'block';
    // Prevenir scroll en el body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.style.display = 'none';
    // Restaurar scroll en el body
    document.body.style.overflow = 'auto';
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target === modal) {
        closeAboutModal();
    }
}

// Cerrar el modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAboutModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});