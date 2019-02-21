function twittar() {
    let tweetOne = document.createElement("p");
    let tweetTwo = document.createElement("p");
    let li = document.createElement("li");
    let tweet = document.getElementById("twitter").value;
    tweetOne.innerHTML = tweet;
    tweetTwo.innerHTML = time();
    li.appendChild(tweetOne);
    li.appendChild(tweetTwo);
    document.getElementById("posttotal").appendChild(li);
    document.getElementsByTagName('form')[0].reset()
}

document.getElementById('btntwittar').addEventListener('click', twittar);

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
        document.getElementById("restante").style.color = "#1c94e0";
    }
    if (valor <= 10) {
        document.getElementById("restante").style.color = "#a3b0bd";
    }
    if (valor < 0) {
        document.getElementById("btntwittar").disabled = "disabled";
        document.getElementById("restante").innerHTML = valor;
        document.getElementById("restante").style.color = "red";
    }
}


let lengthPostTwitter = document.getElementById("twitter");
lengthPostTwitter.addEventListener('keydown', getKey);

function getKey(event) {
    let code = event.keyCode;
    if (lengthPostTwitter.scrollHeight > lengthPostTwitter.offsetHeight || code === 13 && code !== 8) {
        lengthPostTwitter.rows += 1;
    }
    if (lengthPostTwitter.scrollHeight < lengthPostTwitter.offsetHeight && code === 8) {
        lengthPostTwitter.rows -= 1;
    }
}

function time() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let strMin = min.toString();
    let strHour = hour.toString();
    if (strHour.length < 2)
        strHour = "0" + strHour;
    if (strMin.length < 2)
        strMin = "0" + strMin;
    let timeToday = strHour + ":" + strMin;
    return timeToday
}