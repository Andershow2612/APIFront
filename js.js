function botaoApertado(){

    //Atribuindo os valores vindos do formulário em váriaveis.
    const produto = document.getElementById('produtoId').value
    const nome = document.getElementById('idNome').value
    const descricao = document.getElementById('idDescricao').value
    const preco = document.getElementById('idPreco').value
    const imagemUrl = document.getElementById('idImagemUrl').value
    const estoque = document.getElementById('idEstoque').value
    const dataCadastro = document.getElementById('idDataCadastro').value
    const botaoAdicionar = document.getElementById('botao')
    
    
    
    //Criando objeto com os valores da váriavel.
    const obj = {  
        nome: nome, //nome é o valor e title é a instancia que que vai estar de acordo com a API
        descricao: descricao,
        preco: preco,
        imagemUrl: imagemUrl,
        estoque: estoque,
        dataCadastro: dataCadastro
    }
    
    // URL da API
    var apiUrl = "http://localhost:5045/Produtos";
    
    //ai então passar esse objeto vai para dentro da fetch
    // Requisição HTTP para a API
    
        fetch(apiUrl, {
            method: 'POST',
            header: { //header é o cara que vai chegar primeiro na API e vai pedir as autorizações necessárias. 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if(!response.ok){
                    throw new Error('Deu ruim parcero')
                }
            })
            .catch(error => {
                console.error('Erro ao obter dados da API:', error);
            }
        );
    
        function botaoApertado(){
            addEventListener.botaoAdicionar('click', function() {
                // Exibe um alerta com a mensagem desejada
                alert('Seu produto foi adicionado');
            });
        }
    }
    
    