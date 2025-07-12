const defaultEmployees = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    department: "Engineering",
    role: "Frontend Developer"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    department: "HR",
    role: "Recruiter"
  }
];

const employees = JSON.parse(localStorage.getItem("employees")) || defaultEmployees;
localStorage.setItem("employees", JSON.stringify(employees));
