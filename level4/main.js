fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].id);
    let tableData="";
    objectData.map((values)=>{
        tableData += `<tr>
        <td> ${values.id} </td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
       
        
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})