var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    var  female=document.getElementById("female").checked;
    var  male=document.getElementById("male").checked;
           if(male=="0"|| female=="0")
                formData["gender"]=document.querySelector('[name="gender"]:checked').value;
         else
           formData["gender"]="-";
    formData["hobbies"] = document.getElementById("hobbies").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("student list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.hobbies;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("hobbies").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementsByName("gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("hobbies").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.hobbies;
}

function onDelete(td) {
        
        let row = td.parentElement.parentElement;
        document.getElementById("student list").deleteRow(row.rowIndex);
        resetForm();

}
function validate() {
    let isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
