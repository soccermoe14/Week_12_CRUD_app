var selectedRow = null


//funtion to deal with the form by adding, updating, and restting
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


//string arrays for storing data submitted
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["birthdate"] = document.getElementById("birthdate").value;
    formData["dessert"] = document.getElementById("dessert").value;
    formData["office"] = document.getElementById("office").value;
    return formData;
}

//funtion to create a new record
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.birthdate;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dessert;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.office;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

//function to reset the form for a new submission
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("dessert").value = "";
    document.getElementById("office").value = "";
    selectedRow = null;
}

//function to edit data inside row
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("birthdate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dessert").value = selectedRow.cells[2].innerHTML;
    document.getElementById("office").value = selectedRow.cells[3].innerHTML;
}

//function to update the info from the edit
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.birthdate;
    selectedRow.cells[2].innerHTML = formData.dessert;
    selectedRow.cells[3].innerHTML = formData.office;
}

//function to delete record already created
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//function to require this field is completed in order to continue
function validate() {
    isValid = true;
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