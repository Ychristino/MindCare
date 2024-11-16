// scripts.js
function calcularResultado() {
    // Obter as respostas do formulário
    const respostas = {
        pergunta1: parseInt(document.getElementById('pergunta1').value),
        pergunta2: parseInt(document.getElementById('pergunta2').value),
        pergunta3: parseInt(document.getElementById('pergunta3').value),
        pergunta4: parseInt(document.getElementById('pergunta4').value),
    };

    // Calcular a pontuação total
    const pontuacaoTotal = respostas.pergunta1 + respostas.pergunta2 + respostas.pergunta3 + respostas.pergunta4;

    // Exibir o resultado baseado na pontuação
    let resultadoTexto = '';
    if (pontuacaoTotal <= 6) {
        resultadoTexto = 'Você está se sentindo muito mal. É importante procurar ajuda e cuidar da sua saúde mental.';
    } else if (pontuacaoTotal <= 10) {
        resultadoTexto = 'Você está com o humor em baixa. Pode ser útil tentar técnicas de relaxamento ou conversar com alguém.';
    } else if (pontuacaoTotal <= 14) {
        resultadoTexto = 'Seu humor está em um estado neutro. Tente focar em atividades que te trazem prazer e bem-estar.';
    } else if (pontuacaoTotal <= 18) {
        resultadoTexto = 'Você está se sentindo bem! Continue cuidando de sua saúde mental e aproveite os momentos positivos.';
    } else {
        resultadoTexto = 'Você está se sentindo ótimo! Seu humor está excelente, continue mantendo práticas saudáveis!';
    }

    // Mostrar o resultado na tela
    document.getElementById('resultadoTexto').textContent = resultadoTexto;
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('avaliacaoForm').reset();
}
