const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const result = document.getElementById("result");

console.log("LoveLab çalışıyor!");
console.log(yesButton);

yesButton.addEventListener("click", function() {

result.textContent = "Ehehehe";
console.log("Yippie!!!")
});

noButton.addEventListener("click", function() {
result.textContent = "Neeee diyon olm!!";
console.log("Püh emegime");
noButton.classList.toggle("angry");
});
