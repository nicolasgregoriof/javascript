function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Esta função precisa ter todos os argumentos");
    }else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));

function saudacao (nome,idade){
    if(idade === undefined){
        console.log("Olá " + nome);
    }else{
        console.log("Olá " + nome + "você tem " + idade + "anos");
    }
}

saudacao("Nicolas");
saudacao("Nicolas",29);