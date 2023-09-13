let taskinput = document.getElementById("addText");
document.querySelector("button").addEventListener('click', () => {
    const theList = document.querySelector('ul');
    const tasking = document.createElement('li');
    tasking.innerHTML = taskinput.value;
    const completed = document.createElement("input");
    taskinput.value = '';
    theList.appendChild(tasking);
});
document.addEventListener('click', (event) => {
    event.target.classList.add("completed");
});
document.addEventListener('dblclick', (event) => {
    event.target.remove();
})
//document.getElementByID('').style = "text-decoration: line-through;"