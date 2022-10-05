var blue_btn = document.getElementById("blue");
var red_btn = document.getElementById("red");
var gold_btn = document.getElementById("gold");
var black_btn = document.getElementById("black");
var landing = document.getElementById("landing-image");
var battery = document.getElementById("battery-img");
var buy_btn = document.getElementById("buy");

blue_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../resources/images/0_1_6.png")';
  battery.style.backgroundImage = 'url("../resources/images/3_2.png")';
  buy_btn.style.backgroundColor = "#414bb2";
  buy_btn.style.color = "white";
});
red_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../resources/images/0_1_7.png")';
  battery.style.backgroundImage = 'url("../resources/images/3_1.png")';
  buy_btn.style.backgroundColor = "#a53019";
  buy_btn.style.color = "white";
});
gold_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  landing.style.backgroundImage = 'url("../resources/images/0_1_2.png")';
  battery.style.backgroundImage = 'url("../resources/images/3_4.png")';
  buy_btn.style.backgroundColor = "#e4d7b4";
  buy_btn.style.color = "black";
});
black_btn.addEventListener("click", function onClick(event) {
  console.log("It works");
  landing.style.backgroundImage = 'url("../resources/images/0_1_5.png")';
  battery.style.backgroundImage = 'url("../resources/images/3_3.png")';
  buy_btn.style.backgroundColor = "#a8b3b6";
  buy_btn.style.color = "black";
});
