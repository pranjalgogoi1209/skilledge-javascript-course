let tableData = [
    {Name : 'Pranjal Gogoi', Id : 1804852, Position : 'React Developer'},
    {Name : 'Krishna Yadav', Id : 1804791, Position : 'Next js Developer'},
    {Name : 'Rahul Singh', Id : 1804855, Position : 'IPS officer'}
]

/* let tbody = document.querySelector('tbody');
tbody.innerHTML = `
    <tr>
        <td>${tableData[0].Name}</td>
        <td>${tableData[0].Id}</td>
        <td>${tableData[0].Position}</td>
    </tr>
    <tr>
        <td>${tableData[1].Name}</td>
        <td>${tableData[1].Id}</td>
        <td>${tableData[1].Position}</td>
    </tr>
    <tr>
        <td>${tableData[2].Name}</td>
        <td>${tableData[2].Id}</td>
        <td>${tableData[2].Position}</td>
    </tr>
`; */


/* let tbody = document.querySelector('tbody');
for(let data of tableData){
    tbody.innerHTML = `
        <tr>
            <td>${data.Name}</td>
            <td>${data.Id}</td>
            <td>${data.Position}</td>
        </tr>
    `;
} */


let tbody = document.querySelector('tbody');
for(let data of tableData){
    let tr = document.createElement('tr');
    for(let d in data){
        let td = document.createElement('td');
        td.innerText = `${data[d]}`;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}