// Exemplo de como você pode adicionar funcionalidade ao botão "Adicionar ao Carrinho"

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'btn-adicionar'
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    
    // Adiciona um 'ouvinte de evento' de clique a cada botão
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o nome do produto no elemento <h3> anterior
            const nomeProduto = botao.closest('.cartao-produto').querySelector('h3').textContent;
            
            // Exibe um alerta simples
            alert(`O produto "${nomeProduto}" foi adicionado ao seu carrinho! (Funcionalidade de JS)`);

            // Aqui você adicionaria a lógica real:
            // 1. Atualizar o contador do carrinho no header
            // 2. Adicionar o item a um array (o carrinho)
            // 3. Salvar o carrinho no LocalStorage para persistência
        });
    });

    // Você adicionaria mais lógica aqui, como:
    // - Abrir e fechar o menu de navegação em telas menores (mobile)
    // - Funcionalidade da barra de pesquisa
    // - Efeitos de carrossel de imagens no banner
});
