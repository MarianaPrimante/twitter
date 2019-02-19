function twittar() {
    let tweet = document.getElementById("twitter").value;
    document.getElementById("posttwitter").innerHTML = tweet
}

let boton = document.getElementById('btntwittar');
boton.addEventListener('click', twittar, true);


function contarCaracteres() {
    let max = 140;
    let atual = document.getElementById('twitter').value.length;
    let valor = max - atual;
    if (valor > 0) {
        if (valor === 1) { valor = 0; }
        document.getElementById("restante").innerHTML = valor;
        document.getElementById("btntwittar").disabled = "";
        document.getElementById("restante").style.color = "black";
    }
    if (valor === 140) {
        document.getElementById("btntwittar").disabled = "disabled";
    }
    if (valor <= 20) {
        document.getElementById("restante").style.color = "green";
    }
    if (valor <= 10) {
        document.getElementById("restante").style.color = "yellow";
    }
    if (valor < 0) {
        document.getElementById("btntwittar").disabled = "disabled";
        document.getElementById("restante").innerHTML = valor;
        document.getElementById("restante").style.color = "red";
    }
}