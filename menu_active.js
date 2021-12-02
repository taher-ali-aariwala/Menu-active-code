/*****************************************************************
_________ _______           _______  _______    _______  _       _________
\__   __/(  ___  )|\     /|(  ____ \(  ____ )  (  ___  )( \      \__   __/
   ) (   | (   ) || )   ( || (    \/| (    )|  | (   ) || (         ) (   
   | |   | (___) || (___) || (__    | (____)|  | (___) || |         | |   
   | |   |  ___  ||  ___  ||  __)   |     __)  |  ___  || |         | |   
   | |   | (   ) || (   ) || (      | (\ (     | (   ) || |         | |   
   | |   | )   ( || )   ( || (____/\| ) \ \__  | )   ( || (____/\___) (___
   )_(   |/     \||/     \|(_______/|/   \__/  |/     \|(_______/\_______/
                                                                          
******************************************************************/

//to keep the current page active
for (var nk = window.location,
o = $("#menu a").filter(function() {
return this.href == nk;
})
.addClass("active")
.parent()
.addClass("active");;) {
// console.log(o)
if (!o.is("li")) break;
o = o.parent()
.addClass("your_class")
.parent()
.addClass("active");
}

// ______________Active Class
$(document).ready(function() {
$(".horizontalMenu-list li a").each(function() {
var pageUrl = window.location.href.split(/[?#]/)[0];
if (this.href == pageUrl) {
$(this).addClass("active");
$(this).parent().addClass("active"); // add active to li of the current link
$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
$(this).parent().parent().prev().click(); // click the item to make it drop
}
});
});

// ______________ Cover-image
$(".cover-image").each(function() {
var attr = $(this).attr('data-image-src');
if (typeof attr !== typeof undefined && attr !== false) {
$(this).css('background', 'url(' + attr + ') center center');
}
});

// ______________Quantity Cart Increase & Descrease
$(function () {
$('.add').on('click',function(){
var $qty=$(this).closest('div').find('.qty');
var currentVal = parseInt($qty.val());
if (!isNaN(currentVal)) {
$qty.val(currentVal + 1);
}
});
$('.minus').on('click',function(){
var $qty=$(this).closest('div').find('.qty');
var currentVal = parseInt($qty.val());
if (!isNaN(currentVal) && currentVal > 0) {
$qty.val(currentVal - 1);
}
});
});



/* ---------------------------------------------
Circle anmations
--------------------------------------------- */
const colors = ["#698cf09c", "#698cf0"];

const numBalls =150;
const balls = [];

for (let i = 0; i < numBalls; i++) {
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
ball.style.top = `${Math.floor(Math.random() * 800)}vh`;
ball.style.transform = `scale(${Math.random()})`;
ball.style.width = `${Math.random()}em`;
ball.style.height = ball.style.width;

balls.push(ball);
$('.circle-block').append(ball);

}


// Keyframes
balls.forEach((el, i, ra) => {
let to = {
x: Math.random() * (i % 2 === 0 ? -11 : 11),
y: Math.random() * 12
};

let anim = el.animate(
[
{ transform: "translate(0, 0)" },
{ transform: `translate(${to.x}rem, ${to.y}rem)` }
],
{
duration: (Math.random() + 1) * 2000, // random duration
direction: "alternate",
fill: "both",
iterations: Infinity,
easing: "ease-in-out"
}
);
});

