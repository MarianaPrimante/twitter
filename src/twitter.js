function twittar(event) {
    var evento = window.event || event;
    let tweet = document.getElementById("twitter").value;
    document.getElementById("posttwitter").innerHTML = tweet
}

let boton = document.getElementById('btntwittar');
boton.addEventListener('click', twittar, true);


function contarCaracteres() {
    let max = 140;
    let atual = document.getElementById('twitter').value.length;
    let valor = max - atual;
    if (valor > 0 && valor < 140) {
        if (valor === 1) { valor = 0; }
        document.getElementById("restante").innerHTML = valor;
        document.getElementById("btntwittar").disabled = "";
    }
    if (valor === 140) {
        document.getElementById("btntwittar").disabled = "disabled";
    }
    if (max > 120) {
        document.getElementById("restante").style.color = "yellow";
    }
    if (max > 130) {
        document.getElementById("restante").style.color = "red";
    } else {
        document.getElementById("btntwittar").disabled = "disabled";
    }
}