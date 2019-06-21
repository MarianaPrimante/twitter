function twittar() {
  const tweetOne = document.createElement("p");
  const tweetTwo = document.createElement("p");
  const line = document.createElement("li");
  const tweet = document.getElementById("twitter").value;
  tweetOne.innerHTML = tweet;
  tweetTwo.innerHTML = time();
  line.appendChild(tweetOne);
  line.appendChild(tweetTwo);
  document.getElementById("post-total").appendChild(line);
  document.getElementsByTagName("form")[0].reset();
  countCharacters();
  getKey(event);
}

document.getElementById("btntwittar").addEventListener("click", twittar);

function countCharacters() {
  const max = 140;
  let current = document.getElementById("twitter").value.length;
  let amount = max - current;
  let btnTwittar = document.getElementById("btntwittar");
  let rest = document.getElementById("rest");
  if (amount > 0) {
    if (amount === 1) { amount = 0; }
    rest.innerHTML = amount;
    btnTwittar.disabled = "";
    rest.style.color = "black";
  }
  if (amount === 140) {
    btnTwittar.disabled = "disabled";
  }
  if (amount <= 20) {
    rest.style.color = "#1c94e0";
  }
  if (amount <= 10) {
    rest.style.color = "#a3b0bd";
  }
  if (amount < 0) {
    btnTwittar.disabled = "disabled";
    rest.innerHTML = amount;
    rest.style.color = "red";
  }
}

const lengthPostTwitter = document.querySelector("#twitter");
lengthPostTwitter.addEventListener("keydown", getKey);
lengthPostTwitter.addEventListener("click", countCharacters);
lengthPostTwitter.addEventListener("keyup", countCharacters);

function getKey(event) {
  const code = event.keyCode;
  if (lengthPostTwitter.scrollHeight > lengthPostTwitter.offsetHeight || code === 13) {
    lengthPostTwitter.rows += 1;
  } 
  if (lengthPostTwitter.scrollHeight === lengthPostTwitter.offsetHeight && code === 8) {
    if (lengthPostTwitter.rows === 1) {
      lengthPostTwitter.rows = 1;
    } else {
      lengthPostTwitter.rows -= 1;
    } 
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
  return timeToday;
}