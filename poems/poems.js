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
  console.log(this.name)
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
