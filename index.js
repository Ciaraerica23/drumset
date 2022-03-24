  let drum1=document.querySelectorAll("button")[0];
let drum2=document.querySelectorAll("button")[1];
let drum3=document.querySelectorAll("button")[2];
let drum4=document.querySelectorAll("button")[3];
let drum5=document.querySelectorAll("button")[4];
let drum6=document.querySelectorAll("button")[5];
let drum7=document.querySelectorAll("button")[6];




function playCrash(){

  let audio1=new Audio("crash.mp3");
  audio1.play();
  drum1.classList.add("pressed");
  setTimeout(function(){
    drum1.classList.remove("pressed");
  },500);
}
drum1.addEventListener("click",playCrash);


function playKick(){

let audio2=new Audio("kick-bass.mp3");
audio2.play();
drum2.classList.add("pressed");
setTimeout(function(){
  drum2.classList.remove("pressed");
},500);
}
drum2.addEventListener("click",playKick);

function playSnare(){

let audio3=new Audio("snare.mp3");
audio3.play();
drum3.classList.add("pressed");
setTimeout(function(){
  drum3.classList.remove("pressed");
},500);
}
drum3.addEventListener("click",playSnare);

function playTom1(){

let audio4=new Audio("tom-1.mp3");
audio4.play();
drum4.classList.add("pressed");
setTimeout(function(){
  drum4.classList.remove("pressed");
},500);
}
drum4.addEventListener("click",playTom1);

function playTom2(){

let audio5=new Audio("tom-2.mp3");
audio5.play();
drum5.classList.add("pressed");
setTimeout(function(){
  drum5.classList.remove("pressed");
},500);
}
drum5.addEventListener("click",playTom2);

function playTom3(){

let audio6=new Audio("tom-3.mp3");
audio6.play();
drum6.classList.add("pressed");
setTimeout(function(){
  drum6.classList.remove("pressed");
},500);
}
drum6.addEventListener("click",playTom3);

function playTom4(){

let audio7=new Audio("tom-4.mp3");
audio7.play();
drum7.classList.add("pressed");
setTimeout(function(){
  drum7.classList.remove("pressed");
},500);
}
drum7.addEventListener("click",playTom4);
