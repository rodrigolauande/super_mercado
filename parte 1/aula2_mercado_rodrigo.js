// criar uma array para amarzenar os produtos
var items = [];

//selecionar os elementos "Produto e Preco", para serem cadastrados no backend
document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
   var nomeProduto = document.querySelector('input[name=nome_produto').value;
   var precoProduto = document.querySelector('input[name=valor_produto').value;


//teste apos a criacao
// alert(nomeProduto);
// alert(precoProduto);

//cadastrar array items
items.push({
    nome: nomeProduto,
    valor: precoProduto
});

//teste apos a criacao
alert(items[0].nome); //iten cadastrado sempre, em ordem de indice

});