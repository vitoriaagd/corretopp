// Obtém o elemento do botão com o ID 'botao' do DOM
var botao = document.getElementById('botao');

// Adiciona um evento de clique ao botão "Nova Receita"
document.getElementById('showFormButton').addEventListener('click', function() {
    // Obtém o formulário de postagem pelo ID
    var postForm = document.getElementById('postForm');
    // Alterna a exibição do formulário entre 'block' (visível) e 'none' (oculto)
    postForm.style.display = (postForm.style.display === 'none' || postForm.style.display === '') ? 'block' : 'none';
});

async function handleSubmit(event) {
    // Impede o comportamento padrão do formulário, que seria recarregar a página
    event.preventDefault();

    // Obtém os valores do formulário
    var desc_receita = document.getElementById('postContent').value;
    var authorName = document.getElementById('authorName').value;
    var postContent = document.getElementById('postContent').value; // Repetido desnecessariamente, pode usar apenas 'desc_receita'

    // ID do usuário (neste caso, estático, mas pode ser dinâmico dependendo da implementação)
    var user_id = 1;

    // Cria um objeto com os dados a serem enviados na requisição
    const data = {
        user_id,
        desc_receita
    };

    // Envia uma requisição POST para criar a nova receita no servidor
    const response = await fetch('http://localhost:3000/api/store/receita_criar', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"}, // Define o tipo de conteúdo como JSON
        body: JSON.stringify(data) // Converte o objeto 'data' em uma string JSON
    });

    // Converte a resposta do servidor para um objeto JSON
    let content = await response.json();

    // Verifica se a operação foi bem-sucedida
    if (content.success) {
        // Cria um novo elemento de postagem
        var postElement = document.createElement('div');
        postElement.classList.add('post'); // Adiciona a classe 'post' ao novo elemento
     
        // Preenche o HTML do novo elemento de postagem com o nome do autor e o conteúdo da postagem
        postElement.innerHTML = `
            <p class="author">${authorName}</p>
            <p class="content">${postContent}</p>
        `;
     
        // Adiciona a nova postagem à lista de postagens na página
        document.getElementById('postList').appendChild(postElement);
     
        // Limpa os campos do formulário para nova entrada
        document.getElementById('postContent').value = '';
        document.getElementById('authorName').value = '';

        // Mostra um alerta de sucesso
        alert("Postagem realizada com sucesso!");
    } else {
        // Mostra um alerta de erro se a operação falhar
        alert("Ocorreu um erro ao tentar postar a receita.");
    }
}
