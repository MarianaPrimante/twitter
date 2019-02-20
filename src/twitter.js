/*function twittar() {
    let tweet = document.getElementById("twitter").value;
    let post = document.getElementById("posttwitter").innerHTML = tweet;
    let postTwo = document.getElementById("hourpost").innerHTML = time();
    let postTotal = post + postTwo;
    document.getElementsByTagName('form')[0].reset()    
}*/



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

function getKey() {
    let lengthPostTwitter = document.getElementById("twitter");
    if(lengthPostTwitter.scrollHeight > lengthPostTwitter.offsetHeight){
        lengthPostTwitter.rows +=1;
    }
}

function time() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let strMin = min.toString();
    let strHour = hour.toString();
    if(strHour.length < 2)
    strHour = "0" + strHour;
    if(strMin.length < 2)
    strMin = "0" + strMin;  
    let timeToday = hour + ":" + min;
    return timeToday
}

document.getElementById('btntwittar').addEventListener('click', twittar);

function twittar(){
    let tweetOne = document.createElement("p");
    let tweetTwo = document.createElement("p");
    let div = document.createElement("div");
    let tweet = document.getElementById("twitter").value;
    tweetOne.innerHTML = tweet;
    tweetTwo.innerHTML = time();
    div.appendChild(tweetOne);
    div.appendChild(tweetTwo);
    document.getElementById("posttotal").appendChild(div);
    document.getElementsByTagName('form')[0].reset() 
}