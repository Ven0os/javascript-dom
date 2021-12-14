const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
const articles = ["a", "the", "an"];

bands.sort((a, b) => {
  //console.log('Inside sorting function')
  articles.forEach((article) => {
    a = a.toUpperCase().replace(article.toUpperCase() + " ", "");
    b = b.toUpperCase().replace(article.toUpperCase() + " ", "");
  });
  console.log("first phrase: ", a);
  console.log("second phrase: ", b);
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(bands);

const ulElm = document.querySelector("#bands");

function buildLiElm(text) {
  const liElm = document.createElement("li");
  const textNode = document.createTextNode(text);
  liElm.appendChild(textNode);
  ulElm.appendChild(liElm);
}

bands.forEach((elm) => buildLiElm(elm));
