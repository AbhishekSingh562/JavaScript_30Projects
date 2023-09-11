let toastBox = document.getElementById("toastBox");
let successMsg = "<box-icon name='check'></box-icon>Successfully submitted";
let errorMsg =
  "<box-icon type='solid' name='x-square'></box-icon>Please fix the error";
let invalidMsg =
  "<box-icon type='solid' name='x-square'></box-icon>Invalid msg plsease check again";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Successfully")) {
    toast.classList.add("success");
  }

  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
