// scripts.js
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    
    if (email) {
        alert("Obrigado por se inscrever, " + email + "! Você receberá nossas atualizações em breve.");
        document.getElementById("newsletterForm").reset();
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});
