const inputBox = document.getElementById("input-box");
const listCotainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!!");
  } else {
    let li = document.createElement("li");
    // li.innerHTML = inputBox.value;
    li.textContent = inputBox.value;
    listCotainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";
  saveData();
}

//change
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

listCotainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listCotainer.innerHTML);
}

function showTask() {
  listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();
