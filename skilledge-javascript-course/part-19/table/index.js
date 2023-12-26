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

let tableData = [
  { name: "Pranjal Gogoi", id: 1804852, position: "React Developer" },
  { name: "Krishna Yadav", id: 1804791, position: "Next js Developer" },
  { name: "Rahul Singh", id: 1804855, position: "IPS officer" },
  { name: "Ishan Aggarwal", id: 1804847, position: "App Developer" },
];
let tbody = document.querySelector("tbody");

for (let data of tableData) {
  let tr = document.createElement("tr");
  for (let item in data) {
    let td = document.createElement("td");
    td.innerText = data[item];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
