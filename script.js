//popup box selecting popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//select cancel button
var cancelbutton =document.getElementById("remove-task")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container, add list,title,desc
var container=document.querySelector(".container")
var addtask=document.getElementById("add-task")
var tasktitleinput=document.getElementById("task-title-input")
var taskdescinput=document.getElementById("task-description-input")

addtask.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","list-container")
    div.innerHTML=`<h2>${tasktitleinput.value}</h2>
            <p>${taskdescinput.value}</p>
            <button onclick="deleteev(event)">Remove</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteev(event){
    event.target.parentElement.remove()

}
