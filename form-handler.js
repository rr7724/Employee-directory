const form = document.getElementById('employeeForm');
const editingData = JSON.parse(localStorage.getItem('editingEmployee'));

if (editingData) {
  Object.keys(editingData).forEach(key => {
    if (form.elements[key]) {
      form.elements[key].value = editingData[key];
    }
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const newEmp = {
    id: editingData?.id || Date.now(),
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    department: form.department.value.trim(),
    role: form.role.value.trim()
  };

  if (!validateEmail(newEmp.email)) {
    alert("Invalid email format");
    return;
  }

  let stored = JSON.parse(localStorage.getItem("employees")) || [];

  if (editingData) {
    const index = stored.findIndex(e => e.id === editingData.id);
    if (index !== -1) stored[index] = newEmp;
    localStorage.removeItem('editingEmployee');
  } else {
    stored.push(newEmp);
  }

  localStorage.setItem("employees", JSON.stringify(stored));
  window.location.href = "templates/dashboard.html"; // Redirect to dashboard
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
