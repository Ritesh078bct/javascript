const ul = document.querySelector(".list ul");

const input = document.querySelector(".input input");
const addButton = document.querySelector(".input button");
addButton.addEventListener("click", () => {
    if (input.value.trim() == "") {
        alert("You have to write something !!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value + `<img src="images/close.svg" alt=""></img>`;
        ul.appendChild(li)
       
        // console.log(input.value);
        input.value="";
        saveData()
        
    }

    
});


ul.addEventListener("click", (e) => {
    // console.log(e.target.tagName)
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        saveData()
    }
});


ul.addEventListener("mouseover",(e)=>{
if(e.target.tagName=="LI"){
    let img=e.target.querySelector("img");
    if(img){
        img.style.display="block"
    }
}
});
ul.addEventListener("mouseout",(e)=>{
    if(e.target.tagName=="LI"){
        let img=e.target.querySelector("img");
        if(img){
            img.style.display="none"
        }
    }
});
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();