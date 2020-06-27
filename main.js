let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const ul = document.createElement('ul');

    btn.textContent = "Dodaj jeszcze 10 elementów";
    document.body.appendChild(btn);
    btn.addEventListener("click", createLiElements);

    const btnReset = document.createElement('button');
    btnReset.textContent = "Wyczyść";
    document.body.appendChild(btnReset);
    btnReset.addEventListener("click", cleanList);

    ul.style.listStyle = "none";
    document.body.appendChild(ul);
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}


const createLiElements = () => {
    const list = document.querySelector('ul');
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `Element nr ${orderElement++}`;
        liElement.style.fontSize = `${size++}px`;
        list.appendChild(liElement);
    }
}
init();