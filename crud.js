var selectedRow=null;
function onFormSubmit()
{
    var formData=readFormData();
    if(selectedRow===null)
         insertNewRecord(formData);
    else
        updateRecord()

        resetForm();

}
function readFormData()
{
    var formData={}
    formData["Name"]=document.getElementById("Name").value;
    formData["Age"]=document.getElementById("Age").value;
    formData["Gender"]=document.getElementById("Gender").value;
    formData["Hobby"]=document.getElementById("Hobby").value;
    return formData;

}
function insertNewRecord(data)
{
    var table= document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.Name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.Age;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.Gender;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.Hobby;
    cell4=newRow.insertCell(4);
    cell4.innerHTML= `<a onClick="onEdit(this)">edit</a>
        <a onClick="onDelete(this)">delete</a>`;
}
function resetForm()
{
    document.getElementsById("Name").value="";
    document.getElementById("Age").value="";
    document.getElementById("Gender").value="";
    document.getElementById("Hobby").value="";
    selectedRow=null;
}
function onEdit(td)
{
    selectedRow=td.parentElement.parentElement;
    document.getElementsById("Name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Age").value=selectedRow.cells[1].innerHTML;
    document.getElementById("Gender").value=selectedRow.cells[2].innerHTML;

    document.getElementById("Hobby").value=selectedRow.cells[3].innerHTML;

}
function updateRecord()
{
    selectedRow.cells[0].innerHTML=formData.Name;
    selectedRow.cells[1].innerHTML=formData.Age;
    selectedRow.cells[2].innerHTML=formData.Gender;
    selectedRow.cells[3].innerHTML=formData.Hobby;


}
function onDelete(td)
{
    if(confirm('Are you sure to delete this record?')){
    row=td.parentElement.parentElement;
    document.getElementsById("employeelist").deleteRow(row.rowIndex);
    resetForm();
    }
}