// Obtém o elemento do botão com o ID 'formulario'
const botao = document.getElementById('formulario');

// Adiciona um evento de clique ao botão para redirecionar para 'formulario.html'
botao.addEventListener('click', function() {
    window.location.href = 'formulario.html'; // Redireciona o usuário para a página de formulário
});

// Obtém o elemento do botão com o ID 'feed'
const botao2 = document.getElementById('feed');

// Adiciona um evento de clique ao botão para redirecionar para 'feed.html'
botao2.addEventListener('click', function() {
    window.location.href = 'feed.html'; // Redireciona o usuário para a página do feed
});
