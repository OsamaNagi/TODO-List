const btn = document.querySelector("[data-add]");
const input = document.querySelector("[data-input]");
const todoList = document.querySelector("[data-todoList]");
const todoComplete = document.querySelector("[data-todoComplete]");

btn.addEventListener("click", creatList);
todoList.addEventListener("click", deleteList);
todoList.addEventListener("click", checkList);
todoComplete.addEventListener("click", completeDelete);
todoComplete.addEventListener("click", reCompleteDelete);

function creatList(event) {
  if (input.value.length === 0) return;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("flex", "flex-row", "justify-center", "mt-6", "gap-4");
  todoDiv.classList.add("delete");

  const newLi = document.createElement("li");
  newLi.classList.add(
    "h-auto",
    "px-2",
    "py-1",
    "text-black",
    "bg-purple-100",
    "rounded-md",
    "outline-none",
    "xs:break-words",
    "md:break-words",
    "xs:h-auto",
    "sm:h-auto",
    "xs:w-60",
    "md:w-64",
    "lg:w-70",
    "xl:w-96",
    "mr-2",
    "list-none",
    "font-bold",
    "text-xl",
    "break-words"
  );
  newLi.innerText = input.value;
  todoDiv.append(newLi);

  const checkBtn = document.createElement("button");
  checkBtn.classList.add(
    "check",
    "bg-indigo-600",
    "fas",
    "fa-check",
    "h-10",
    "px-4",
    "py-1",
    "rounded-md",
    "hover:bg-green-500"
  );
  todoDiv.append(checkBtn);

  const trashBtn = document.createElement("button");
  trashBtn.classList.add(
    "delete",
    "fas",
    "fa-trash",
    "h-10",
    "px-4",
    "py-1",
    "bg-indigo-600",
    "rounded-md",
    "hover:bg-red-600"
  );
  todoDiv.append(trashBtn);

  todoList.append(todoDiv);
  input.value = "";
}
function checkList(e) {
  const item = e.target;
  if (item.classList[0] === "check") {
    const todo = item.parentElement;
    todo.remove();
    todoComplete.append(todo);
    todo.classList.add("opacity-50");
    item.classList.remove("fa-check");
    item.classList.add("fa-arrow-up");
  }
}
function reCompleteDelete(e) {
  const item = e.target;
  if (item.classList[8] === "fa-arrow-up") {
    const todo = item.parentElement;
    todo.remove();
    todoList.append(todo);
    item.classList.remove("fa-arrow-up");
    item.classList.add("fa-check");
    todo.classList.remove("opacity-50");
  }
}
function deleteList(e) {
  const item = e.target;
  if (item.classList[0] === "delete") {
    const todo = item.parentElement;
    todo.remove();
  }
}
function completeDelete(e) {
  const item = e.target;
  if (item.classList[0] === "delete") {
    const todo = item.parentElement;
    todo.remove();
  }
}
