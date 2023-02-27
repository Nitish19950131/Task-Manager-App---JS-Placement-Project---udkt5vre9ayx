const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;


todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
 
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("here");
    
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

var i=0;
var taskId;

function createTodo() {
  i=i+1;
  taskId=100+i;
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);

  const span_input= document.createElement("span");
  span_input.appendChild(txt);
  const todo_div_des=document.createElement("div");
 // todo_div_des.appendChild(txt);
  todo_div_des.setAttribute("data-target","#Description");
  todo_div_des.setAttribute("class","cls_des");



  const description_val=document.getElementById("todo_description").value;
  const description_txt=document.createTextNode(description_val);

  const para=document.createElement("p");
 
  para.setAttribute("id",i);
  para.setAttribute("class","nitish");
  span_input.setAttribute("id",taskId);
  console.log(span_input);
  para.appendChild(description_txt);
  todo_div_des.appendChild(span_input);
  todo_div_des.appendChild(para);

  todo_div.appendChild(todo_div_des);
  
  para.style.display="none";

  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");
 

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);
  if(input_val!="")
  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  
//Description modal


  const btns1 = document.querySelectorAll("[data-target]");
 
  btns1.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.target).classList.add("active");
      var parent=document.getElementById(btn.getElementsByTagName('p')[0].id);
      console.log(parent);
     
     // var task_name=document.getElementById(btn.getElementsByTagName('span')[0].id);
     // console.log(task_name);
      const identity = parent.id !=i ? parent.id%i : i;
     // const task_identity = task_name.id !=taskId ? task_name.id%taskId : taskId; 
      var task_identity= 100 + identity;
      console.log(task_identity+ "hai");
     // var identity=i;

     // if(parent.id!=i)
     //  identity=parent.id%i;

      console.log("identity: " + identity);
      //document.getElementById("message").innerHTML=document.getElementById(identity).innerHTML;
      document.getElementById("update_description").value=document.getElementById(identity).innerHTML;
      document.getElementById("update_task").value=document.getElementById(task_identity).innerHTML;
      document.getElementById("submit_update").classList.forEach((item) => {
        document.getElementById("submit_update").classList.remove(item);
      })
      document.getElementById("submit_update").classList.add(identity);
    
    overlay.classList.add("active");
    
   
   
    });
   
  });
 


  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  document.getElementById("todo_description").value="";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}


const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

document.getElementById("submit_update").addEventListener("click",(identity)=>{
 
  var identity = document.getElementById("submit_update").classList[0];
  var task_identity= 10+identity;
  console.log(identity);
  
  console.log(task_identity);
  document.getElementById(identity).innerHTML =document.getElementById("update_description").value;
  //document.getElementById("message").innerHTML=document.getElementById("update_description").value;
  document.getElementById("update_description").value="";
 // var taskidname=identity+100;
  document.getElementById(task_identity).innerHTML = document.getElementById("update_task").value;
  //console.log(taskId);
  document.getElementById("submit_update").classList.remove(identity);
   Description.classList.remove("active");
    overlay.classList.remove("active");
  
 

});
