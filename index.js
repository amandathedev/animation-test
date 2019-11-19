var options = {
  ballBaseSpeed: 1,
  ballVariantSpeed: 2
};

var w = window.innerWidth;
var h = window.innerHeight;
var wrapper = document.querySelector(".wrapper");

let animating = true;
let defaultSpeed =
  options.ballBaseSpeed + Math.floor(Math.random() * options.ballVariantSpeed);

function Ball(name, color, r, link, speed = defaultSpeed) {
  this.x = Math.floor(Math.random() * w);
  this.y = Math.floor(Math.random() * h);
  this.r = r;
  this.speed = speed;
  this.angle = Math.floor(Math.random() * 360);
  this.link = link;

  this.vector = {};
  this.vector.x = Math.cos(this.angle) * this.speed;
  this.vector.y = Math.cos(this.angle) * this.speed;
  this.color = color;
  this.name = name;
  this.initDOM();
}

Ball.prototype.initDOM = function() {
  var ball = document.createElement("button");
  let link = document.createElement("a");
  link.href = this.link;
  ball.appendChild(link);
  ball.classList.add("ball");
  ball.style.left = this.x + "px";
  ball.style.top = this.y + "px";
  ball.style.width = this.r * 2 + "px";
  ball.style.height = this.r + "px";
  ball.innerText = this.name;
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

let tulip = new Ball("tulip", "#fe02a2", 45, "www.google.com", 1.8);
let lucrece = new Ball("lucrece", "#fe02a2", 45, "www.google.com", 1.8);
let cite = new Ball("cite", "#fe02a2", 45, "www.google.com", 1.8);
let about = new Ball("about", "#41fdfe", 45, "www.google.com", 1.2);
let contact = new Ball("contact", "#41fdfe", 45, "www.google.com", 1.2);
let other = new Ball("other", "#bc13fe", 45, "www.google.com", 1.9);
let things = new Ball("things", "#bc13fe", 45, "www.google.com", 1.9);
let sundaey = new Ball("Sundaey", "#DB020C", 45, "www.google.com", 1.5);
let poems = new Ball("poems", "#600563", 30, "www.google.com", 20);
balls.push(tulip, lucrece, cite, about, contact, other, things, sundaey, poems);

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

function spawnPoems() {
  time = 1000;
  if (animating === true)
    setInterval(function() {
      let x = new Ball("poems", "#600563", 30, "www.google.com", 20);
      time /= 2;
      balls.push(x);
    }, time);
  else {
    time = 1000;
  }
}

// spawnPoems()
