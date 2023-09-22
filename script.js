let main = document.getElementById("main");

function add(){
    let item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("click", newCol);
    main.appendChild(item);
}

function remove(){
    let arr = main.querySelectorAll("div");
    arr[arr.length-1].remove();
}

function newCol(){
    if(this.style.backgroundColor == "black"){
        this.style.backgroundColor = "white";
        this.style.border = "2px solid black";
    }
    else{
        this.style.backgroundColor = "black";
        this.style.border = "2px solid white";
    }
}

/*function reset(){
    let arr = main.querySelectorAll("div");
    for (i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "white";
    }
}*/