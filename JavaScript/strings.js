//retorna o tamanho de uma string
let tamanhoTexto = 'Tulio'.length;
//console.log(tamanhoTexto);

//retorna um array quebrando a string com um delimitador
let textoQuebrado = 'Tulio Teodoro'.split(' ');
//console.log(textoQuebrado);

//busca por um valor e substitui por outro
let trocarTexto = 'Tulio Teodoro'.replace('Teodoro', 'Oliveira');
//console.log(trocarTexto);

//retorna a fatia de um valor
let ultimoCaractere = 'Tulio'.slice(-1);
//tudo menos o ultimo caractere
//let tudoMenosUltimoCaractere = 'Tulio'.slice(0, -1);
//console.log(ultimoCaractere);

//retorna n caracteres a partir de uma posição
let caracteresApartirDeUmaPosicao = 'Noticia: Hoje terá chuva no final do dia.'.substr(0,20);
//console.log(caracteresApartirDeUmaPosicao);

const listaNumero = [0, 1, 2, 3, 4, 5];
listaNumero.forEach(item =>{
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
    } else {
        console.log(`O número ${item} é impar`);
    }
});


 


