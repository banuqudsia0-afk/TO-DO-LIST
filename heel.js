let button = document.querySelector("button");
button.style.color = "purple";

let input = document.querySelector("input");
let box = document.querySelector(".box");
box.style.color = "purple";

let box2 = document.querySelector(".boox");
button.addEventListener("click", function myfu(){
     
     let list = document.createElement("p");
     list.innerText = input.value ;
     list.style.display = "flex";
     if(input.value === "")
     {
          alert("please enter text");
          
     }
     let deletebutton = document.createElement("button");
     deletebutton.innerText = "x";
     list.appendChild(deletebutton);
      box2.prepend(list);
      deletebutton.classList.add("delete");
    deletebutton.addEventListener("click",function fun(){
        list.remove();   
        
     });
});