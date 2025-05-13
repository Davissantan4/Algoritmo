function contarVetor(vetor, numero){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == numero){
            contador++;
        }
    }
    return contador;
}

let contador = 0;
let vetor = [1, 2, 3, 1, 4, 5, 2];

console.log(contarVetor(vetor, 1));