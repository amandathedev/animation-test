var options = {
  numberOfBalls: 50,
  ballBaseRadius: 55,
  ballVariantRadius: 50,
  ballBaseSpeed: 1,
  ballVariantSpeed: 1,
  particleColors: ["#ff89a4", "#a989ff", "#a4ff89", "#FFFCF9"]
};

var w = window.innerWidth;
var h = window.innerHeight;
var wrapper = document.querySelector(".wrapper");

let animating = true;

function Ball(name, color) {
  this.x = Math.floor(Math.random() * w);
  this.y = Math.floor(Math.random() * h);
  this.r =
    options.ballBaseRadius +
    Math.floor(Math.random() * options.ballVariantRadius);
  this.speed =
    options.ballBaseSpeed +
    Math.floor(Math.random() * options.ballVariantSpeed);
  this.angle = Math.floor(Math.random() * 360);

  this.vector = {};
  this.vector.x = Math.cos(this.angle) * this.speed;
  this.vector.y = Math.cos(this.angle) * this.speed;
  this.color = color;
  this.name = name;
  this.initDOM();
}

Ball.prototype.initDOM = function() {
  var ball = document.createElement("button");
  ball.classList.add("ball");
  ball.style.left = this.x + "px";
  ball.style.top = this.y + "px";
  ball.style.width = this.r + "px";
  ball.style.height = this.r + "px";
  ball.innerText = this.name;
  let index = Math.floor(Math.random() * options.particleColors.length);
  ball.style.backgroundColor = this.color;

  this.domElement = ball;
  wrapper.appendChild(ball);
};

// Bounce off edges
Ball.prototype.updatePosition = function() {
  this.x += this.vector.x;
  this.y += this.vector.y;

  if (this.x >= w || this.x <= 0) {
    this.vector.x *= -1;
  }
  if (this.y >= h || this.y <= 0) {
    this.vector.y *= -1;
  }

  if (this.x > w) this.x = w;
  if (this.y > h) this.y = h;
  if (this.x < 0) this.x = 0;
  if (this.y < 0) this.y = 0;
};

Ball.prototype.updateDOM = function() {
  this.domElement.style.left = this.x + "px";
  this.domElement.style.top = this.y + "px";
  this.domElement.innerText = this.name;
};

var balls = [];

let tulip = new Ball("tulip", "pink");
let lucrece = new Ball("lucrece", "pink");
let cite = new Ball("cite", "pink");
let about = new Ball("about", "lightblue");
let contact = new Ball("contact", "lightblue");
let other = new Ball("other", "purple");
let things = new Ball("things", "purple");
let sundaey = new Ball("Sundaey", "blue");
let poems = new Ball("poems", "red");

balls.push(tulip, lucrece, cite, about, contact, other, things, sundaey, poems);

function switchAbout(button) {
  setInterval(function() {
    if (button.name === "about") {
      button.name = "contact";
    } else {
      button.name = "about";
    }
  }, 1500);
}
switchAbout(about);
switchAbout(contact);

function switchThings(button) {
  setInterval(function() {
    if (button.name === "things") {
      button.name = "other";
    } else {
      button.name = "things";
    }
  }, 2500);
}
switchThings(things);
switchThings(other);

requestAnimationFrame(updateFrame);

function updateFrame() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].updatePosition();
    balls[i].updateDOM();
  }
  requestAnimationFrame(updateFrame);
}

window.addEventListener("resize", event => {
  w = window.innerWidth;
  h = window.innherHeight;
});

let button = document.getElementById("button1");
button.addEventListener("click", () => pauseButtons());
function pauseButtons() {
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (animating === false) {
      ball.speed =
        options.ballBaseSpeed +
        Math.floor(Math.random() * options.ballVariantSpeed);
      ball.angle = Math.floor(Math.random() * 360);
      ball.vector.x = Math.cos(ball.angle) * ball.speed;
      ball.vector.y = Math.cos(ball.angle) * ball.speed;
    } else {
      ball.vector.x = 0;
      ball.vector.y = 0;
    }
  }
  console.log(animating);
  animating = !animating;
}
