let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li"); 


for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}





// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', addToDo)  



//Fonksiyonlar 

function addTodoToStorage(taskDOM){ 
    let todos=getTodosFromStorage();
    todos.push(taskDOM);
    localStorage.setItem("todos",JSON.stringify(todos));

}


function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();  
}


function addToDo(e) {
 
    if (taskDOM.value == "")  {  
    $(".error").toast("show");
     }
    else
   {
    $(".success").toast("show");
    
    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
         liDOM.onclick = check;
         let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
e.preventDefault();
}    





