function renderEmployees(list) {
  const container = document.getElementById('employeeContainer');
  container.innerHTML = '';
  list.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
      <p>${emp.email}</p>
      <p>${emp.department}</p>
      <p>${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}

function loadEmployeesFromStorage() {
  const stored = JSON.parse(localStorage.getItem("employees")) || [];
  renderEmployees(stored);
}

function editEmployee(id) {
  const stored = JSON.parse(localStorage.getItem("employees")) || [];
  const emp = stored.find(e => e.id === id);
  if (emp) {
    localStorage.setItem("editingEmployee", JSON.stringify(emp));
    window.location.href = "../form.html";
  }
}

function deleteEmployee(id) {
  let stored = JSON.parse(localStorage.getItem("employees")) || [];
  stored = stored.filter(e => e.id !== id);
  localStorage.setItem("employees", JSON.stringify(stored));
  renderEmployees(stored);
}

document.getElementById("searchInput").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const stored = JSON.parse(localStorage.getItem("employees")) || [];
  const result = stored.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  renderEmployees(result);
});

window.onload = () => loadEmployeesFromStorage();
