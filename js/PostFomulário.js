// Função para executar o POST quando o botão for pressionado
function botaoApertado() {
    const botaoAdicionar = document.getElementById('botao');

    // Adiciona um listener para o evento de clique no botão
    botaoAdicionar.addEventListener('click', function() {
        // Atribuindo os valores vindos do formulário em variáveis
        const nome = document.getElementById('idNome').value;
        const descricao = document.getElementById('idDescricao').value;
        const preco = document.getElementById('idPreco').value;
        /* const imagemUrl = document.getElementById('idImagemUrl').value; */
        const estoque = document.getElementById('idEstoque').value;
        const categoria = document.getElementById('categoriaId').value;

        // Criando objeto com os valores do formulário
        const obj = {  
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagemUrl: '.',
            estoque: estoque,
            categoriaId: categoria,
            categoria: null
        };

        // URL da API
        var apiUrl = "http://localhost:5045/Produtos";

        // Requisição HTTP para a API (POST)
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'//header é o cara que vai chegar primeiro na API e vai pedir as autorizações necessárias. 
            },
            body: JSON.stringify(obj)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao adicionar o produto');
            }
            // Exibe um alerta quando o produto for adicionado com sucesso
            alert('Seu produto foi adicionado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao adicionar produto:', error);
            alert('Erro ao adicionar produto. Verifique o console para mais detalhes.');
        });
    });
}

// Chama a função para que o evento de clique no botão seja configurado
botaoApertado();

