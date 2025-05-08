document.getElementById('admissionForm').addEventListener('submit', function (f) {
    f.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('Email1').value;
    let course = document.getElementById('courseHelp').value;
    let phNumber = document.getElementById('phnumberHelp').value;
    let address = document.getElementById('addressHelp').value;
    let city = document.getElementById('cityHelp').value;
    let state = document.getElementById('stateHelp').value;

    let table = document.getElementById('details');
    table.style.display = 'table';

    let tbody = table.querySelector('tbody');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${email}</td>
                <td>${course}</td>
                <td>${phNumber}</td>
                <td>${address}</td>
                <td>${city}</td>
                <td>${state}</td>
            `;
    tbody.appendChild(newRow);
    document.getElementById('admissionForm').reset();
});