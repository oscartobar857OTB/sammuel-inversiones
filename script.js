document.addEventListener("DOMContentLoaded", () => {
    const numerosDisponibles = [
        79, 80, 88, 92, 108, 109, 126, 181, 182, 183, 185, 193, 194,
        243, 244, 245, 250, 268, 335, 337, 452, 453, 460, 471, 530, 531,
        534, 542, 554, 555, 607, 608, 609, 615, 618, 622, 627, 723, 724,
        725, 731, 746, 747, 749, 841, 842, 853, 905, 906, 921
    ];
    
    const lista = document.getElementById("lista-numeros");
    numerosDisponibles.forEach(num => {
        const div = document.createElement("div");
        div.classList.add("numero");
        div.textContent = num;
        lista.appendChild(div);
    });

    const form = document.getElementById("reservaForm");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);
        fetch("https://formspree.io/f/mzzbzrkd", { // Enlace Formspree para enviar a tu correo
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                mensaje.textContent = "✅ Reserva enviada con éxito. Te contactaremos pronto.";
                form.reset();
            } else {
                mensaje.textContent = "❌ Error al enviar la reserva. Intenta nuevamente.";
            }
        });
    });
});
