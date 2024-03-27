function transporMatriz(A) {

    console.log("Matriz Original:");
    A.forEach(linha => console.log(linha.join(' ')));
    
   
    const transposta = Array.from({ length: A[0].length }, () => Array(A.length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            transposta[j][i] = A[i][j];
        }
    }

   
    console.log("\nMatriz Transposta:");
    transposta.forEach(linha => console.log(linha.join(' ')));
}


const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
transporMatriz(matriz);
