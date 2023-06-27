let numb = document.querySelectorAll(".numb");
for (let i = 0; i < numb.length; i++) {
  let counter = 0;
  setInterval(() => {
    if (counter == numb[i].title) {
      clearInterval();
    } else {
      counter += 1;
      numb[i].textContent = counter + "%";
    }
  }, 80);
}
console.log(numb[0]);