import { db, ref, push } from './firebase.js';

const form = document.getElementById("leadForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) return;

  const leadsRef = ref(db, "leads/");
  await push(leadsRef, { name, email, timestamp: Date.now() });

  form.reset();
  formStatus.textContent = "✔️ Lead added successfully!";
});
