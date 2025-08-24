// script.js

// Simulação de votos (NO FUTURO, ISSO VIRARÁ DE UMA PLANILHA OU API)
// Por enquanto, vamos usar números aleatórios para simular a disputa acirrada!
let votosEsquerda = Math.floor(Math.random() * 100) + 300; // Gera um número entre 300 e 400
let votosDireita = Math.floor(Math.random() * 100) + 300;  // Gera um número entre 300 e 400

// Elementos do DOM
const elementoVotosEsquerda = document.getElementById('votos-esquerda');
const elementoVotosDireita = document.getElementById('votos-direita');
const botaoEsquerda = document.getElementById('botao-esquerda');
const botaoDireita = document.getElementById('botao-direita');
const timerElement = document.getElementById('timer');

// Função para atualizar o placar na tela
function atualizarPlacar() {
    elementoVotosEsquerda.textContent = votosEsquerda;
    elementoVotosDireita.textContent = votosDireita;

    // Adiciona uma animação de "pulse" ao atualizar
    elementoVotosEsquerda.classList.add('pulse');
    elementoVotosDireita.classList.add('pulse');

    // Remove a classe após a animação terminar
    setTimeout(() => {
        elementoVotosEsquerda.classList.remove('pulse');
        elementoVotosDireita.classList.remove('pulse');
    }, 300);
}

// Função para simular um voto (NO FUTURO, isso será substituído pela confirmação de compra da sua plataforma de e-commerce)
function simularVoto(lado) {
    if (lado === 'esquerda') {
        votosEsquerda++;
        // Efeito visual no botão
        botaoEsquerda.classList.add('votou');
        setTimeout(() => botaoEsquerda.classList.remove('votou'), 300);
    } else if (lado === 'direita') {
        votosDireita++;
        // Efeito visual no botão
        botaoDireita.classList.add('votou');
        setTimeout(() => botaoDireita.classList.remove('votou'), 300);
    }
    atualizarPlacar();

    // Aqui você normalmente redirecionaria para o link de compra.
    // Como é uma simulação, vamos apenas alertar.
    // alert(`Você votou na ${lado.toUpperCase()}! Em um cenário real, você seria redirecionado para a página de pagamento.`);
}

// Configuração do Timer (Contagem Regressiva)
const dataFinal = new Date();
dataFinal.setDate(dataFinal.getDate() + 30); // Define o fim para 30 dias a partir de hoje

function atualizarContagemRegressiva() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    timerElement.innerHTML = `FALTAM ${dias} DIAS E ${horas} HORAS`;
}

// Event Listeners para os botões (simulação)
botaoEsquerda.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o redirecionamento imediato para simular
    simularVoto('esquerda');
    // No cenário real, remova a linha acima e descomente a abaixo:
    // window.location.href = botaoEsquerda.href;
});

botaoDireita.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o redirecionamento imediato para simular
    simularVoto('direita');
    // No cenário real, remova a linha acima e descomente a abaixo:
    // window.location.href = botaoDireita.href;
});

// Inicialização
atualizarPlacar();
atualizarContagemRegressiva();
// Atualiza o contador a cada minuto
setInterval(atualizarContagemRegressiva, 60000);