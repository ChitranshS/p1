var blue_btn = document.getElementById("blue");
var red_btn = document.getElementById("red");
var gold_btn = document.getElementById("gold");
var black_btn = document.getElementById("black");
var landing = document.getElementById("landing-image");
var battery = document.getElementById("battery-img");
var buy_btn = document.getElementById("buy");
var controls = document.getElementById("controls-img");
var caseimg = document.getElementById("case-img");
var width = window.innerWidth;

blue_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../p1/resources/images/0_1_6.png")';
  battery.style.backgroundImage = 'url("../p1/resources/images/3_2.png")';
  controls.style.backgroundImage = 'url("../p1/resources/images/4_3_f.png")';

  if (width > 767) {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_2.png")';
  } else {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_1_1.png")';
  }
  buy_btn.style.backgroundColor = "#414bb2";
  buy_btn.style.color = "white";
});
red_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../p1/resources/images/0_1_7.png")';
  battery.style.backgroundImage = 'url("../p1/resources/images/3_1.png")';
  controls.style.backgroundImage = 'url("../p1/resources/images/4_3_f_1.png")';
  if (width > 767) {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_1.png")';
  } else {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_1_3.png")';
  }
  buy_btn.style.backgroundColor = "#a53019";
  buy_btn.style.color = "white";
});
gold_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../p1/resources/images/0_1_2.png")';
  battery.style.backgroundImage = 'url("../p1/resources/images/3_4.png")';
  controls.style.backgroundImage = 'url("../p1/resources/images/4_3_f_3.png")';
  if (width > 767) {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_3.png")';
  } else {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_1_4.png")';
  }
  buy_btn.style.backgroundColor = "#e4d7b4";
  buy_btn.style.color = "black";
});
black_btn.addEventListener("click", function onClick(event) {
  console.log("It works");
  landing.style.backgroundImage = 'url("../p1/resources/images/0_1_5.png")';
  battery.style.backgroundImage = 'url("../p1/resources/images/3_3.png")';
  controls.style.backgroundImage = 'url("../p1/resources/images/4_3_f_2.png")';
  if (width > 767) {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_4.png")';
  } else {
    caseimg.style.backgroundImage = 'url("../p1/resources/images/c_1_2.png")';
  }
  buy_btn.style.backgroundColor = "#a8b3b6";
  buy_btn.style.color = "black";
});
