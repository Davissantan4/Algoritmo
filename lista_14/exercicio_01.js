function parOuImpar(numero){
    if(numero % 2 == 0){
        return 'par';
    }else {
        return 'ímpar';
    }
}

console.log(parOuImpar(12));
console.log(parOuImpar(7));