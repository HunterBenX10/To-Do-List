const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let img = document.createElement("img");
    img.src = "images/recycle-bin.png";
    img.className = "delete-icon";
    img.onclick = function () {
      li.remove();
    };
    li.appendChild(img);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTasks();
