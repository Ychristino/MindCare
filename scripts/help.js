function exibirMensagem() {
    alert("Esse é um recurso importante para sua saúde mental.");
}

document.querySelectorAll('.resources-section a').forEach(link => {
    link.addEventListener('click', exibirMensagem);
});
