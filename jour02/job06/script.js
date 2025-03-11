let codeEnter = [];
const goodCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "a",
  "b",
];
window.addEventListener("keydown", (e) => {
  konami(e.key);
});
const konami = (code) => {
  codeEnter.push(code);
  console.log(codeEnter);
  console.log(goodCode);
  isEqual(goodCode, codeEnter);
};
const isEqual = (goodCode, codeEnter) => {
  if (codeEnter.length === goodCode.length) {
    let tab1 = goodCode.toString();
    let tab2 = codeEnter.toString();
    if (tab1 === tab2) {
      const bodyStyle = document.getElementById("body");
      bodyStyle.style.backgroundImage = "url(./img/laplateforme.png)";
      bodyStyle.style.backgroundSize = "cover";
    }
  }
};
