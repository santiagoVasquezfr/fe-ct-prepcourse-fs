function doWhile(num){
    let valor = num;
    let contador = 0;

    do{
        valor += 5;
        contador+=1;
    }while(valor < 8);
    return valor;


}
console.log(doWhile(3));