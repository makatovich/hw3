let element = document.getElementById("table");
let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

let table = '<table><tr><td>firstName</td><td>lastName</td><td>age</td></tr>';

for ( let item of data ) {
    table = table + '<td>' + item.firstName + '</td>';
    table += '<td>' + item.lastName + '</td>';
    table += '<td>' + item.age + '</td><tr></tr>';
}

element.innerHTML = table;