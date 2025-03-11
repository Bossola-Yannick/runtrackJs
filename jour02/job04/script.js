window.addEventListener("keypress", (e) => {
  addLetter(e.key);
});

const addLetter = (x) => {
  let keyLogger = document.getElementById("keyLogger");
  let key = keyLogger.value;
  if (document.activeElement === keyLogger) {
    keyLogger.value += x;
  } else keyLogger.value += x;
  console.log(key);
  console.log(x);
};
