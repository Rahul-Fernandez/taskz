function addRow() {
          
    var name = document.getElementById("name");
    var aurth = document.getElementById("aurth");
    var cate = document.getElementById("cate");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= name.value;
    row.insertCell(2).innerHTML= aurth.value;
    row.insertCell(3).innerHTML= cate.value;
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
 
 