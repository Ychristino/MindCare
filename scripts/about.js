// scripts.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Obrigado, " + name + "! Sua mensagem foi enviada.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
