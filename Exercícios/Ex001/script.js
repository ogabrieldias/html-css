// Seleciona o botão e a aba de informações
const toggleButton = document.querySelector('.toggle-btn');
const infoAba = document.querySelector('.info-aba');

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Verifica se a aba está visível ou não
    if (infoAba.style.display === "none" || infoAba.style.display === "") {
        infoAba.style.display = "block"; // Mostra a aba
    } else {
        infoAba.style.display = "none"; // Esconde a aba
    }
});
