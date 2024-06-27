function MainInfo() {
    var ApiUrl = "http://localhost:5045/Produtos";

    fetch(ApiUrl)
        .then(response => response.json()) //Convertendo a resposta em JSON
        .then(data => {

            console.log(data);
            const produtosContainer = document.querySelector('.produtos');

            // Criar um card para cada item na resposta da API
             data.forEach(item => { //forEach é um loop para cada item encontrado.
                const cardHTML = ` 
                    <div class="card">
                        <h2>Id do Produto: ${item.produtoId}</h2>
                        <h2>Nome do produto: ${item.nome}</h2>
                        <h2>Descrição: ${item.descricao}</h2>
                        <h2>Preço: ${item.preco}</h2>
                        <h2>Estoque: ${item.estoque}</h2>
                    </div>
                `; 
                produtosContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Ocorreu um erro:', error));
}

MainInfo();