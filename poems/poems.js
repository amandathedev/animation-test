// particlesJS("particles-js", {
//   particles: {
//     number: {
//       value: 207,
//       density: { enable: true, value_area: 946.9771699587272 }
//     },
//     color: { value: "#901aaa" },
//     shape: {
//       type: "circle",
//       stroke: { width: 3, color: "#af31af" },
//       polygon: { nb_sides: 8 },
//       image: { src: "img/github.svg", width: 100, height: 100 }
//     },
//     opacity: {
//       value: 0.48102361825965684,
//       random: false,
//       anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
//     },
//     size: {
//       value: 0,
//       random: true,
//       anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
//     },
//     line_linked: {
//       enable: true,
//       distance: 1010.1495983452793,
//       color: "#daf7a6",
//       opacity: 0.6974842464765024,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: { enable: false, rotateX: 600, rotateY: 1200 }
//     }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "repulse" },
//       onclick: { enable: true, mode: "push" },
//       resize: true
//     },
//     modes: {
//       grab: { distance: 400, line_linked: { opacity: 1 } },
//       bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//       repulse: { distance: 200, duration: 0.4 },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 }
//     }
//   },
//   retina_detect: true
// });

// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);



let w = window.innerWidth - 100;
let h = window.innerHeight - 100;


let poemName = ["poem", "another poem", "pome", "prm", "anthr prm"]
function Poem(link) {
  this.x = Math.floor(Math.random() * w);
  this.y = Math.floor(Math.random() * h);
  this.r = 25;
  this.color = "red";
  this.name = poemName[Math.floor(Math.random(poemName.length))];
  this.textColor = "white";
  this.link = link
  this.initDOM();
}

//Initialize buttons onto DOM
Poem.prototype.initDOM = function() {
  let wrapper = document.querySelector(".wrapper");
  var ball = document.createElement("button");
  let a = document.createElement("a")
  ball.append(a)
  a.href = this.link
  // ball.addEventListener("click", () => redirectButton(this.link));
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
  console.log(wrapper)
  wrapper.appendChild(ball);
};

let iml = new Poem("https://www.poetryfoundation.org/poems/150097/immediately-motionless-likeness")
let sun = new Poem("https://hyperallergic.com/469850/two-poems-by-kirsten-ihns/")
let itc = new Poem("https://yr.olemiss.edu/piece/ihns-2/")
let btg = new Poem("http://dreginald.com/index.php/issues/issue-fourteen/kirsten-ihns")
let witb = new Poem ("http://www.jubilat.org/jubilat/archive/issue36/")
let bwr = new Poem("https://bwr.ua.edu/2016-contest-an-interview-with-poetry-winner-kirsten-ihns/")
let mipy = new Poem("http://www.benningtonreview.org/issue-3")
let mb = new Poem ("http://realitybeach.org/ihns/")
let yh = new Poem("http://westbranch.blogs.bucknell.edu/kirsten-ihns/10/2018/")
let sittf = new Poem("https://yr.olemiss.edu/piece/ihns/")
let wts = new Poem("https://yr.olemiss.edu/piece/when-the-situation/")
let adoh = new Poem("http://blacksunlit.com/2019/06/three-poems-by-kirsten-ihns/")
let rts = new Poem("https://issuu.com/phoebejournal/docs/phoebe_48.2_final_pdf_fc4535b24c1a59/101")
let af2 = new Poem("http://www.poolpoetry.com/poet-kirsten-ihns.html")
let zf = new Poem("http://cordite.org.au/poetry/notheme7/zipper-fax/")
let te = new Poem("https://iowareview.org/blog/trash-exoticaroissy-mcdonaldsred-orangeradiant-orchid")
let ywtb = new Poem("https://tagvverk.info/2017/07/06/kirsten-ihns/")
let yvm = new Poem("http://www.radioactivemoat.com/kirsten-ihns.html")
