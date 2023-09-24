const main = document.getElementById("main");
const ws = new WebSocket('wss://starwarsrpg.onrender.com:6969')

ws.addEventListener('message', (event) => {
    const objectPool = JSON.parse(event.data);
    renderObjectPool(objectPool);
});

function renderObjectPool(pool) {
    let arr = main.querySelectorAll("div");
    arr.forEach((object) => {
        object.remove();
    });
    console.log(pool);
    pool.forEach((object) => {
        const item = document.createElement('div');
        item.classList.add("item");
        item.id = object.id;
        item.addEventListener("click", newCol);
        if(object.color == "black"){
            item.style.backgroundColor = "black";
        }
        main.appendChild(item);
    });
}

function add(){
    ws.send("add");
}

function remove(){
    ws.send("remove");
}

function newCol(){
    ws.send(this.id);
}