// Inicializar EmailJS
(function() {
    emailjs.init("zheom42xtEnyQbCop");
})();

document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mostrar indicador de carga
    Swal.fire({
        title: 'Enviando...',
        text: 'Por favor espera...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    });

    const templateParams = {
        from_name: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        message: document.getElementById('mensaje').value
    };

    emailjs.send("ppwu_wffm_phuk_ayld", "template_syi4ezf", templateParams)
        .then(function() {
            Swal.fire({
                title: '¡Consulta enviada!',
                text: 'Nos pondremos en contacto contigo pronto.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            document.getElementById('consultaForm').reset();
        })
        .catch(function(error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error',
                text: 'Error al enviar: ' + (error.text || error.message || 'Desconocido'),
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
});
