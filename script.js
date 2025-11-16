// Write your code here:
const tBody = document.querySelector("tbody");
const newRow = document.createElement("tr");
tBody.append(newRow);

const newData1 = document.createElement("td");
const button = document.createElement("button");
button.innerText = "Total";
button.style.cursor = "pointer"
newData1.appendChild(button);

const newData2 = document.createElement("td");
newData2.setAttribute("id", "ans");
newData2.setAttribute("data-ns-test", "grandTotal");

newRow.append(newData1);
newRow.append(newData2);

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let sum = 0;
  for (let price of prices) sum += Number(price.innerText) || 0;
  newData2.innerText = sum;
});
