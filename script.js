const form = document.getElementById("addForm");
const empTable = document.getElementById("employees");
const empCount = document.getElementById("empCount");
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const extension = document.getElementById("extension").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  let row = empTable.insertRow();
  row.insertCell(0).appendChild(document.createTextNode(id));
  row.insertCell(1).appendChild(document.createTextNode(name));
  row.insertCell(2).appendChild(document.createTextNode(extension));
  row.insertCell(3).appendChild(document.createTextNode(email));
  row.insertCell(4).appendChild(document.createTextNode(department));

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end";
  deleteBtn.appendChild(document.createTextNode("X"));
  row.insertCell(5).appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
      count--;
      empCount.textContent = count;
    }
  });

  form.reset();
  document.getElementById("id").focus();

  count++;
  empCount.textContent = count;
});
