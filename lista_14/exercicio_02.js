function somarPares(num){
    for(let i = 0; i < num; i++){
        if(i % 2 == 0){
            soma += i;
        }
    }
    return soma;
}

let soma = 0;

console.log(somarPares(10));