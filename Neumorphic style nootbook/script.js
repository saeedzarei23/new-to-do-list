// first select all the elemant we need
const body=document.querySelector('body')
// 1* first we need to select our form
const form = document.querySelector("#add-to-do");
// 2* we select our input
const input = document.querySelector("#to-list");
// 3* we select our list where our note will be add
const list = document.querySelector("#your-list");
// thigs to count
const count = document.querySelector("[data-list-count]");
// second we need to add eventlistner to the form for when
// we submit
form.addEventListener("submit", addingtothelist);

// we make function for our form
function addingtothelist(Event) {
  Event.preventDefault();
  // we make varibel for input value
  const task = input.value;
  //   in here we add if statmant that if we havenothing in input
  //   we get alert
  if (!task) {
    alert("please add somthing");
    return;
  }
  //   we make elemant that have class of task to apply our
  // css style
  const todo_list = document.createElement("div");
  todo_list.classList.add("task");
  //   we add to content over here
  const todo_content = document.createElement("div");
  todo_content.classList.add("content");
  //   in here we are saying everything that type in input
  // get printe in over div
  input.value = "";
  todo_list.appendChild(todo_content);
  //   we add our input over here
  const input_todo = document.createElement("input");
  //   we add class of text over for our css
  input_todo.classList.add("text");
  //   we chose type of pur input
  input_todo.type = "text";
  //   we are saying that every thing we add in the in put
  // get type in our task list
  input_todo.value = task;
  //    we set this atrbiut for  input so we can only red it then we
  // can ediite thing out latter in our code
  input_todo.setAttribute("readonly", "readonly");
  //    we apppend our text to our div
  todo_content.appendChild(input_todo);

  const task_action = document.createElement("div");
  task_action.classList.add("action");

    // const eddite = document.createElement("button");
    // eddite.classList.add("edit");
    // eddite.innerHTML = "DONE";
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = "Delete";

    // task_action.appendChild(eddite);
  task_action.appendChild(remove);

  todo_list.appendChild(task_action);

  list.appendChild(todo_list);
  //   eddite.addEventListener("click",edditeing);

  //   function edditeing() {
  //     if (eddite.innerText.toLowerCase() == "eddite") {
  //       input_todo.removeAttribute("readonly");
  //       input_todo.focus();
  //       eddite.innerText = "Save";
  //     }
  //     else{
  //         eddite.setAttribute('readonly','readonly')
  //         eddite.innerText="Edit"
  //     }
  //   }
  remove.addEventListener("click", removing);
  function removing() {
    todo_list.classList.add("animation");
    list.addEventListener("transitionend", function () {
      list.removeChild(todo_list);
    });
  }
  remove.addEventListener('click',function(){
    number--
    count.innerText=number+" thing left to do"
  })
  
}
let number=0
const addBtn =document.querySelector('#button')
const add= input.value
addBtn.addEventListener('click',function(){
    number++
    count.innerText=number+" thing left to do"

})
addBtn.addEventListener('click',function(){
  alert("your item has been saved")
  return
})