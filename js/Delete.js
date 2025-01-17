function MainInfo() {
    var ApiUrl = "http://localhost:5045/Produtos";
    const produtosContainer = document.querySelector('.produtos');

    fetch(ApiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const cardHTML = `
                    <div class="card">
                        <h2>Id do Produto: ${item.produtoId}</h2>
                        <h2>Nome do produto: ${item.nome}</h2>
                        <h2>Descrição: ${item.descricao}</h2>
                        <h2>Preço: ${item.preco}</h2>
                        <h2>descrição2: ${item.descricao}</h2>
                        <h2>Estoque: ${item.estoque}</h2>
                        <br>
                        <button class="btn-del" data-id="${item.produtoId}">Excluir</button>    
                    </div>
                `;
                produtosContainer.innerHTML += cardHTML;
            });

            // Adicionar event listener para os botões de exclusão
            produtosContainer.querySelectorAll('.btn-del').forEach(btn => {
                btn.addEventListener('click', () => {
                    const produtoId = btn.getAttribute('data-id');
                    deleteProduto(produtoId);
                });
            });
        })
        .catch(error => console.error('Ocorreu um erro:', error));

    function deleteProduto(produtoId) {
        const deleteUrl = `http://localhost:5045/Produtos/${produtoId}`;

        fetch(deleteUrl, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Remover o card do DOM
                const cardToRemove = produtosContainer.querySelector(`[data-id="${produtoId}"]`).parentNode;
                cardToRemove.remove();
                alert("Produto exluido com sucesso");
            } else {
                console.error('Erro ao deletar o produto');
            }
        })
        .catch(error => console.error('Ocorreu um erro ao tentar deletar o produto:', error));
    }
}

MainInfo();