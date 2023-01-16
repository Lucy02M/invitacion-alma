var countDownDate = new Date("Jan 18, 2023 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Es hoy";
  }
}, 1000);

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function regalar() {
  let regalo = document.getElementById('regalo');
  let pedirRegalo = document.getElementById('pedirRegalo');
  pedirRegalo.style.display = 'flex';
}

function remove() {
  pedirRegalo.style.display = 'none';
}

function copyText() {
  let cvuNum =document.getElementById('cvu')
  navigator.clipboard.writeText
      (cvuNum.innerHTML);
}
