let item = "";
let taskinput = document.getElementById("addText");
document.querySelector("button").addEventListener('click', (taskinput) => {
    item = taskinput.value
    document.querySelector('#to_do_list').innerHTML += `<li> + item + </li>`;
});
