const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const uren = document.getElementById("uren");
const minuten = document.getElementById("minuten");
const lijstAlleTijden = document.getElementById("tijdTussenStartStop");
const beginTijdSec = document.getElementById("beginTijdSec");
const beginTijdMil = document.getElementById("beginTijdMil");
const antwoordMil = document.getElementById("antwoordSec");
const antwoordSec = document.getElementById("antwoordMil");
const antwoordp = document.getElementById("bereken");
const berekenBegin = document.getElementById("berekenBegin");
const berekenEind = document.getElementById("berekenEind");




let startButtonClicked = 0;



function getUren(){
    let d = new Date();
    console.log(Date.now());
    let urenn = d.getSeconds();
    uren.innerHTML = urenn;
    
}

function getMinuten(){
    let d = new Date();
    let minutenn = d.getUTCMilliseconds();
    minuten.innerHTML = minutenn;

}
function getSec(){
    let a = new Date();
    let sec = a.getSeconds();
    beginTijdSec.innerHTML = sec;
}
function getMil(){
    let d = new Date();
    let mil = d.getUTCMilliseconds();
    beginTijdMil.innerHTML = mil;
}
function hide() {
    
    startButton.classList.add("opa2");
    stopButton.classList.remove("opa2");
    stopButton.classList.remove("stop");
 }
 function show() {
    stopButton.classList.add("opa2");
    startButton.classList.remove("opa2");

 }
 function show1(){
antwoordp.classList.remove("opa2");
antwoordp.classList.add("opa");
 }
 function hide1(){
     antwoordp.classList.add("opa2");
 }
 function berekenSec(){
    antwoordMil.innerHTML = uren.innerHTML - beginTijdSec.innerHTML; 
 }
 function berekenMil(){
    antwoordSec.innerHTML = minuten.innerHTML - beginTijdMil.innerHTML; 
 }

