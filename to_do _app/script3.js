let inputtask = document.getElementById("i1");
let addtaskbtn = document.getElementById("btn");
let outdiv = document.getElementById("outputdiv");
let arrtask = [];

addtaskbtn.addEventListener("click", () => {
  if (inputtask.value != "") {
    addtask();
    inputtask.value = "";
  } else {
    alert("Add some text for task.......");
  }
});

inputtask.addEventListener('keypress',(e)=>{
  if((e.key=="Enter")&&(inputtask.value!='')){
    addtask();
    inputtask.value='';
  }
})



function addtask() {
  let tempdiv = document.createElement("div");
  let span = document.createElement("span");
  span.innerText = inputtask.value;

  tempdiv.append(span);
  outdiv.append(tempdiv);
  localStorage.setItem(JSON.stringify,"task");

  let checkbtn = document.createElement("button");
  checkbtn.innerHTML = "&check;";
  tempdiv.append(checkbtn);

  let crossbtn = document.createElement("button");
  crossbtn.innerHTML = "&cross;";
  tempdiv.append(crossbtn);

  arrtask.push(inputtask.value);
  console.log(arrtask);

  checkbtn.addEventListener("click", () => {
    if (span.style.textDecoration != "line-through")
      span.style.textDecoration = "line-through";
    else span.style.textDecoration = "none";
  });

  crossbtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
-
  crossbtn.addEventListener('click',(event)=>{
arrtask.forEach((val,i,arrtask)=>{
  if(val==span.innerText){
    arrtask.splice(i,1);
    console.log(arrtask);
  }
})
let array=localStorage.getItem("task");
array.forEach((val,k,array)=>{if(val==span.innerText)
    array.splice(k,1);

})
  })
  

}
