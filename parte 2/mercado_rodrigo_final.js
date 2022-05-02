// // criar uma array para amarzenar os produtos
// var items = [];

// //selecionar os elementos "Produto e Preco", para serem cadastrados no backend
// document.querySelector('input[type=submit]')
// .addEventListener('click',()=>{
//    var nomeProduto = document.querySelector('input[name=nome_produto');
//    var precoProduto = document.querySelector('input[name=price');


// //teste apos a criacao
// // alert(nomeProduto);
// // alert(precoProduto);

// //cadastrar array items
// items.push({
//     nome: nomeProduto.value,
//     valor: precoProduto.value
// });


// //CONTINUACAO DO PROJETO

// //elemento como base para estilizar 'macede' para concatenar de forma dinamica  PEGA DO HTML

// /* <div class="lista-produto-single">
//     <h3>Coca-Cola</h3><span>R$20,00</span>
//     <h3 class="price-produto"></h3>
// </div> */


// //Cria a lista dos produtos, mapeando (recuperando) os produtos, adicionando os produtos
// // let listaProdutos = document.querySelector('.lista-produtos');
// //     items.map(function(val){
// //         listaProdutos.innerHTML+=`
// //         <div class="lista-produto-single">
// //         <h3>Coca-Cola</h3><span>R$20,00</span>
// //         <h3 class="price-produto"></h3>
// //         </div>`;
// //     })

// //mapea as variaveis "nome e valor" dos elementos "nome_produto e price"
// // let listaProdutos = document.querySelector('.lista-produtos');
// //     items.map(function(val){
// //         listaProdutos.innerHTML+=`
// //         <div class="lista-produto-single">
// //         <h3>`+val.nome+`</h3>
// //         <h3 class="price-produto"><span>`+val.valor+`</span></h3>
// //         </div>`;
// //     })

// //Precisa desfaser o looping de duplicar que esta sendo realizado na aplicacao
// //PRECISAR SER LIMPADO A CADA ATUALIZACAO
// let listaProdutos = document.querySelector('.lista-produtos');
// listaProdutos.innerHTML = '';    
//     items.map(function(val){
//         listaProdutos.innerHTML+=`
//         <div class="lista-produto-single">
//         <h3>`+val.nome+`</h3>
//         <h3 class="price-produto"><span>`+val.valor+`</span></h3>
//         </div>`;
//     })
// });

// //Limpando os Valores das tags depois de cadastrar o produto
//ANTES
// var items = [];

// document.querySelector('input[type=submit]')
//     .addEventListener('click',()=>{
//         var nomeProduto = document.querySelector('input[name=nome_produto').value;
//         var precoProduto = document.querySelector('input[name=price').value;

//     items.push({
//         nome: nomeProduto,
//         valor: precoProduto
//     });

//     let listaProdutos = document.querySelector('.lista-produtos');
//     listaProdutos.innerHTML = '';    
//         items.map(function(val){
//             listaProdutos.innerHTML+=`
//             <div class="lista-produto-single">
//             <h3>`+val.nome+`</h3>
//             <h3 class="price-produto"><span>`+val.valor+`</span></h3>
//             </div>`;
//         })
//     });

//AGORA
// var items = [];

// document.querySelector('input[type=submit]')
//     .addEventListener('click',()=>{
//         var nomeProduto = document.querySelector('input[name=nome_produto');
//         var precoProduto = document.querySelector('input[name=price');

//     items.push({
//         nome: nomeProduto.value,
//         valor: precoProduto.value
//     });

//     let listaProdutos = document.querySelector('.lista-produtos');
//     listaProdutos.innerHTML = '';    
//         items.map(function(val){
//             listaProdutos.innerHTML+=`
//             <div class="lista-produto-single">
//             <h3>`+val.nome+`</h3>
//             <h3 class="price-produto"><span>`+val.valor+`</span></h3>
//             </div>`;
//         })

//         nomeProduto.value = '';
//         precoProduto.value = '';
//     });

//Calcular a somatoria dos produtos
var items = [];

document.querySelector('input[type=submit]')
    .addEventListener('click',()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto');
        var precoProduto = document.querySelector('input[name=price');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = '';    
        items.map(function(val){
            soma+=parseFloat(val.valor);

            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>`+val.valor+`</span></h3>
            </div>`;
        })

        soma = soma.toFixed(2);
        nomeProduto.value = '';
        precoProduto.value = '';
        
        let elementoSoma = document.querySelector('.soma-produto h1');
        elementoSoma.innerHTML = 'R$'+soma;
    });

//Criar um botao para limpar os produtos
document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML= "R$ 0,00";
})