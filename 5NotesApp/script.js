// const notesContainer = document.querySelector(".notes-container");

// const createBtn = document.querySelector(".btn");

// let notes = document.querySelectorAll(".input-box");

// createBtn.addEventListener("click", () => {
//   let inputB0x = document.createElement("p");
//   let img = document.createElement("img");
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable", "true");
//   img.src = "images/delete.png";
//   notesContainer.appendChild(inputBox).appendChild(img);
// });

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStroage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p"); // Changed "inputB0x" to "inputBox"
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true"); // Changed "inputBox" to "inputBox"
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStroage();
  } else if (e.target === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStroage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
