let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
 
let idInput = document.querySelector('#id');
let nameInput = document.querySelector('#name');
let fullInput = document.querySelector('#fullName');
let departmentInput = document.querySelector('#department');
 
 
btnAdd.addEventListener('click', () => {
    let id = idInput.value;
    let name = nameInput.value;
    let fullName= fullInput.value;
    let department = departmentInput.value;
 
    let template = `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${fullName}</td>
                    <td>${department}</td>
                </tr>`;
 
    table.innerHTML += template;
});