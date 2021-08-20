const lista_de_pecas = ['Gás 134', 'Motor de Geladeira', 'Micromotor'];
var peso = 300;
let nomePeca = "Rele PTC";
//1 - Verificar se é possivel cadastrar mais peças.
if (lista_de_pecas.length < 10) console.log("É possivel cadastrar mais peças!");
else console.log("Não há mais espaço na lista!");

//Verificar se o peso da peça está adequado.
if(peso > 100)console.log("Peso da peça está adequado!");
else console.log("Peso insuficiente!");

//Verificar se o nome da peça possui mais de três caracteres.
if(nomePeca.length > 3) console.log("Cadastro Aprovado!");
else if  (nomePeca.length == " ") console.log("Produto não declarado!");
else console.log("Cadastro negado!");