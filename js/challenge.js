document.addEventListener("DOMContentLoaded", ()=>{


  document.getElementById("heart").addEventListener("click", ()=>{
    li = document.createElement("li");
    li.setAttribute("id", sec);
    li.innerText = `${sec} has been clicked 1 time`;
    document.querySelector("ul.likes").appendChild(li);
  });

  document.getElementById("pause").addEventListener("click", ()=>{
    let list = document.getElementsByTagName("button");

    for (let button of list){
      if (button.id == "pause"){
        if(button.innerText == "pause"){
          stopCounter();
          button.innerText ="resume"
        }else{
          button.innerText ="pause";
          startCounter();
        }
      }else{
        button.disabled == true? button.disabled = false : button.disabled = true ;
      }
    }

  });
  document.getElementById("plus").addEventListener("click", ()=>{
    stopCounter();
    document.getElementById("counter").innerText = increaseCounter();
    startCounter();
  });
  document.getElementById("minus").addEventListener("click", ()=>{
    stopCounter();
    document.getElementById("counter").innerText = decreaseCounter();
    startCounter();
  });

});
