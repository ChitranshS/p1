var blue_btn = document.getElementById("blue");
var red_btn = document.getElementById("red");
var gold_btn = document.getElementById("gold");
var black_btn = document.getElementById("black");
var bk = document.getElementById("landing-image");
var buy_btn = document.getElementById("buy");

blue_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  bk.style.backgroundImage = 'url("../p1/resources/images/0_1_6.png")';
  buy_btn.style.backgroundColor = "#414bb2";
  buy_btn.style.color = "white";
});
red_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  bk.style.backgroundImage = 'url("../p1/resources/images/0_1_7.png")';
  buy_btn.style.backgroundColor = "#a53019";
  buy_btn.style.color = "white";
});
gold_btn.addEventListener("click", function onClick(event) {
  //   console.log("It works");
  bk.style.backgroundImage = 'url("../resources/images/0_1_2.png")';
  buy_btn.style.backgroundColor = "#e4d7b4";
  buy_btn.style.color = "black";
});
black_btn.addEventListener("click", function onClick(event) {
  console.log("It works");
  bk.style.backgroundImage = 'url("../resources/images/0_1_5.png")';
  buy_btn.style.backgroundColor = "#a8b3b6";
  buy_btn.style.color = "black";
});
