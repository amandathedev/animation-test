function switchImage(img, title) {
  let images = [
    "https://i.imgur.com/G8lSt5N.png",
    "https://images.unsplash.com/photo-1563436627163-0deb71fafd65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://upload.wikimedia.org/wikipedia/commons/b/bf/Rape_of_Lucretia.jpg"
  ];
  let count = 0;

  let titles = ["Cite", "Tulip", "Lucrece"];

  setInterval(function() {
    img.src = images[count % 3];
    title.innerText = titles[count % 3];
    count++;
  }, 1500);
}

let image = document.getElementById("bookimg");
let title = document.getElementById("book-title");
switchImage(image, title);

let div1 = document.getElementById("the-darkness");
let div2 = document.getElementById("book-div");
let mainDiv = document.querySelector("body");

function theDarkness() {
  count = 1;
  mainDiv.innerHTML = "";
  mainDiv.appendChild(div2);
  setInterval(function() {
    mainDiv.innerHTML = "";
    console.log("count");
    if (count % 5 === 0) {
      mainDiv.appendChild(div1);
    } else mainDiv.appendChild(div2);
    count++;
  }, 2500);
}

theDarkness();
