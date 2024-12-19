/*

SetTimeout: -> Executa uma ação uma única vez após um tempo específico. É como um alarme que toca e pronto.

SetInterval:-> Executa uma ação repetidamente em intervalos de tempo regulares. É como um alarme que toca a cada X minutos sem parar.
*/

//EX de uso do SetTimeout:

setTimeout(() => {
    //Executa o que estiver aqui... usase a seta => como função
    alert ("Executei")
}, 3000); //3000 é o tempo em milisegundos, 1 segundo é 1000 mil

//outras forma de usar o setTimeout:
/*
setTimeout(function() {
    //Executa o que estiver aqui...
}, timeout);

function myFuncion() {
    //Executa o que estiver aqui...
};

setTimeout (myFuncion,timeout);
*/

//EX de uso do SetInterval:

let number = 0;
setInterval(() => {
    console.log (number++);
}, 1000); //1000 é o tempo em milisegundos, 1 segundo é 1000 mil