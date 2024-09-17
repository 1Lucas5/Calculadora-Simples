function insert(num){
    var numero = document.getElementById('dentrotela').innerHTML;
    document.getElementById('dentrotela').innerHTML = numero + num;
}

function clean(){
    document.getElementById('dentrotela').innerHTML = ""; 
}

function back(){
    var resultado = document.getElementById('dentrotela').innerHTML;
    document.getElementById('dentrotela').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('dentrotela').innerHTML;
    if(resultado){
        document.getElementById('dentrotela').innerHTML = eval(resultado)
    }
}

function limite(input, maxLength) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
}
