const options = {
  ballBaseSpeed: 1,
  ballVariantSpeed: 2
};

//globals
let w = window.innerWidth - 100;
let h = window.innerHeight - 100;
let wrapper = document.querySelector(".wrapper");
let animating = true;
let defaultSpeed =
  options.ballBaseSpeed + Math.floor(Math.random() * options.ballVariantSpeed);

//Construction of button class
function Ball(name, color, size, speed = defaultSpeed, textColor = "black") {
  this.x = Math.floor(Math.random() * w);
  this.y = Math.floor(Math.random() * h);
  this.r = size;
  this.speed = speed;
  this.angle = Math.floor(Math.random() * 360);
  this.vector = {};
  this.vector.y = Math.random() * 2;
  this.vector.x = Math.cos(this.angle) * this.speed;
  this.color = color;
  this.name = name;
  this.textColor = textColor;
  this.initDOM();
}

//Initialize buttons onto DOM
Ball.prototype.initDOM = function() {
  var ball = document.createElement("button");
  ball.addEventListener("click", () => redirectButton(this.name));
  ball.classList.add("ball");
  ball.style.left = this.x + "px";
  ball.style.top = this.y + "px";
  ball.style.width = this.r * 2 + "px";
  ball.style.height = this.r + "px";
  ball.innerText = this.name;
  ball.style.color = this.textColor;
  ball.style.backgroundColor = this.color;
  ball.style.borderColor = this.color;
  this.domElement = ball;
  wrapper.appendChild(ball);
};

redirectButton = name => {
  if (name === "tulip" || name === "lucrece" || name === "cite") {
    window.location.href = "tulip/tulip.html";
  } else if (name === "about" || name === "contact") {
    window.location.href = "about/about.html";
  } else if (name === "other" || name === "things") {
    window.location.href = "things/things.html";
  } else if (name === "SUNDAEY") {
    window.location.href = "sundaey/sundaey.html";
  } else if (name === "prms") {
    window.location.href = "poems/poems.html";
  } else if (name === "august") {
    window.location.href = "august/august.html";
  }
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

//Creation of starting button menu
let prepBalls = [];
var balls = [];
// group 1 #FF407D
let tulip = new Ball("tulip", "rgba(255, 255, 255, 0.702)", 45, 1.8, "#FF355E");
let lucrece = new Ball(
  "lucrèce",
  "rgba(255, 255, 255, 0.702)",
  45,
  1.8,
  "#FF355E"
);
let cite = new Ball("cite", "rgba(255, 255, 255, 0.702)", 45, 1.8, "#FF355E");
// group 2 #0073D4
let about = new Ball("about", "rgba(255, 255, 255, 0.702)", 45, 1.2, "#FF6037");
let contact = new Ball(
  "contact",
  "rgba(255, 255, 255, 0.702)",
  45,
  1.2,
  "#FF6037"
);
// group 3 #D8BFD8
let other = new Ball("other", "rgba(255, 255, 255, 0.702)", 45, 1.9, "#3F26BF");
let things = new Ball(
  "things",
  "rgba(255, 255, 255, 0.702)",
  45,
  1.9,
  "#3F26BF"
);
// group 4 #C362FF
let sundaey = new Ball(
  "SUNDAEY",
  "rgba(255, 255, 255, 0.702)",
  45,
  1.5,
  "#319177"
);
// group 5 #FF765E
let poems = new Ball("prms", "rgba(255, 255, 255, 0.702)", 35, 6, "#436CB9");
// group 6 #5FBAB0
let august = new Ball("august", "rgba(255, 255, 255, 0.702)", 45, 1.7);
balls.push(
  tulip,
  lucrece,
  cite,
  about,
  contact,
  other,
  things,
  sundaey,
  poems,
  august
);

//functions for button text switch
function switchAbout(button) {
  setInterval(function() {
    if (button.name === "about") button.name = "contact";
    else button.name = "about";
  }, 1500);
}

function switchThings(button) {
  setInterval(function() {
    if (button.name === "things") button.name = "other";
    else button.name = "things";
  }, 2500);
}

function switchTulip(button) {
  setInterval(function() {
    if (button.name === "tulip") button.name = "lucrèce";
    else if (button.name === "lucrèce") button.name = "cite";
    else if (button.name === "cite") button.name = "tulip";
  }, 2000);
}

//invocations of button text switch
switchTulip(tulip);
switchTulip(lucrece);
switchTulip(cite);
switchThings(things);
switchThings(other);
switchAbout(about);
switchAbout(contact);

//Animation update functions
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

//Stop animation button
let button = document.getElementById("button1");
button.addEventListener("click", () => {
  pauseButtons();
});
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
  animating = !animating;
}

//Spawn new poem buttons `rgba(250, 91, 61, ${opacity})`
function spawnPoems() {
  time = 2500;
  let opacity = 1;
  setInterval(function() {
    if (animating === true) {
      let x = new Ball("prms", "rgba(255, 255, 255, 0.702)", 35, 6);
      time /= 2;
      if (opacity <= 0.1) opacity = 1;
      else opacity -= 0.05;
      balls.push(x);
    } else {
      time = 2500;
    }
  }, time);
}

//create random button movement
function randomMovement() {
  setInterval(function() {
    if (animating === true) {
      let i = Math.floor(Math.random() * balls.length);
      let ball = balls[i];
      ball.vector.y = Math.cos(ball.angle) * ball.speed * Math.random() * 2;
      ball.vector.x = Math.cos(ball.angle) * ball.speed * Math.random() * 2;
    }
  }, 300);
}

function consoleMessage() {
  let num = 0;
  setInterval(function() {
    let colors = ["blue", "red", "green", "yellow", "orange", "purple"];
    if (num > 5) num = 0;
    console.log("%cWe are so sorry", `color: ${colors[num]}; font-size: 20px`);
    num++;
  }, 100);
}

function start() {
  let count = 0;
  let x = new Ball("Why?", "rgba(255, 255, 255, 0.702)", 45, 1.8, "black");
  let ballArr = [x];
  setInterval(function() {
    balls.push(ballArr[count]);
  }, 200);
}

randomMovement();
spawnPoems();
consoleMessage();
// start();
