window.onload = function () {
    //mapeamento
    const lista_kitanda = document.querySelector('#produtos');
    const lista_cesta = document.querySelector('#cestaDoCliente');
    const Total = document.querySelector('#mostraTotalCompra');





//Array dos elementos da kitanda
    let kitanda = [
        {descricao: 'Amora', preco:5.80},
        {descricao: 'Abacaxi', preco:5.60},
        {descricao: 'Abacate', preco:4.75},
        {descricao: 'Abóbora', preco:9.80},
        {descricao: 'Banana', preco:6.85},
        {descricao: 'Caju', preco:10.55},
        {descricao: 'Maçã', preco:4.20},
        {descricao: 'Uva', preco:7.49},
        {descricao: 'Cenoura', preco:8.79},
        {descricao: 'Batata', preco:3.59},
        {descricao: 'Batata-Doce', preco:4.99},
        {descricao: 'Pepino', preco:5.59},
        {descricao: 'Limão', preco:7.89},
        {descricao: 'Laranja', preco:6.79},
        {descricao: 'Cebola', preco:3.49},
        {descricao: 'Alho', preco:10.99},
        {descricao: 'Mexirica', preco:8.99},
        {descricao: 'Tomate', preco:7.99},
    
    ]

    let cesta = [
        
    ]


    function listaKitanda() {
        // let totalzinho =0;
        for(let pro of kitanda) {
            const filhoLi = document.createElement('li');
            for(listaP in pro) {
                if(listaP =='preco') {
                    lista_kitanda.appendChild(filhoLi).setAttribute('data-preco', pro[listaP])
                    // totalzinho += (pro[listaP]);
                } else {
                    lista_kitanda.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
                
            }
        }
        // Total.value = Number(totalzinho.toFixed(2));
        // console.log(totalzinho.type)
        
    }  




    //Função adicionar itens na lista de compras do cliente
    //passar as contas para esse item
    function addItensCesta() {
        let totalzinho =0;
        const ulPai = document.querySelectorAll('#produtos');

        ulPai.forEach(function(lista){
    
            lista.addEventListener('click', function(produtos){

 
                const li = document.createElement('li');
                for(listaProdutos in produtos) {
                    if(listaProdutos =='preco') {
                        lista_cesta.appendChild(li).setAttribute('data-preco', produtos[listaProdutos])
                        totalzinho += (produtos[listaProdutos]);
                    } else {
                        lista_cesta.appendChild(li).textContent = `${produtos[listaProdutos]}`;
                        lista_cesta.appendChild(li).textContent = (produtos.target.innerHTML);
                    }
                    Total.value = Number(totalzinho.toFixed(2));
                }

            })
            
        })    
    }    




//não esta funcionando
function verificarExistente() {

    if (cestaDoCliente.indexOf(produtos.descricao) != (-1)) {
        console.log(`A fruta ${produtos.descricao} já esta na lista`);
    } else {
        lista_cesta.push(produtos);
    }
}
    
    
        listaKitanda();
        addItensCesta();




}

