/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = [1,2,3,4,5,6,7];



/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction (arg){
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log (myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
   
  function myFunction2(arr, index){
     return arr[index];
}


   
   

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myArray = [1,'Luma', true, 2.5, [1,2, 'teste']];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log (myFunction2(myArray, 0)); //1
console.log (myFunction2(myArray, 1)); //Luma
console.log (myFunction2(myArray, 2)); //true
console.log (myFunction2(myArray, 3)); //2.5
console.log (myFunction2(myArray, 4)); //Array(3) [ 1, 2, "teste" ]


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
  function book (bookName){
    var allBooks = {
        'Ladrão de Almas': {
           quantidadePaginas: '400',
           autor: 'Alma Katsu',
           editora: 'Novo Conceito',
},
        'A Cabana': { 
           quantidadePaginas: 500,
           autor: 'William P. Young',
           editora: 'Arqueiro',

},
        'Se eu Ficar': {
           
           quantidadePaginas: '340',
           autor: 'Gayle Forman',
           editora: 'Novo Conceito', 



}  

    };

return !bookName ? allBooks : allBooks[bookName];
};
  




/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log (book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Se eu ficar tem ' + book('Se eu Ficar').quantidadePaginas + ' páginas!');

//O livro Se eu ficar tem 340 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/


console.log('O autor do livro Se eu ficar tem ' + book('Se eu Ficar').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
