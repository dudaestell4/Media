
function media(){
var var1 = document.getElementById('valor1').value;
var var2 = document.getElementById('valor2').value;
var var3 = document.getElementById('valor3').value;
var var4 = document.getElementById('valor4').value;

var media = (parseInt (var1) + parseInt(var2) + parseInt(var3) + parseInt(var4)) / 4;
alert(media)
}

function limpa(){
    document.getElementById('valor1').value=("");
    document.getElementById('valor2').value=("");
    document.getElementById('valor3').value=("");
    document.getElementById('valor4').value=("");
}



