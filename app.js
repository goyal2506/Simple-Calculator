let display = document.querySelector("#input")
function press(value){
    display.value += value;
}

function allClear(){
    display.value="";
}

function del(){
    display.value = display.value.toString().slice(0,-1);
}

let btn = document.querySelector(".equal");

document.addEventListener('keydown', (event) => {
      if (event.keyCode !== 13) return
      display.value=eval(display.value)
    })