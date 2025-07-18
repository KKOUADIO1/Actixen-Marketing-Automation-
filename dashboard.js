import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Replace with your config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const leadsRef = ref(db, "leads");

const tableBody = document.getElementById("leadTable");

onValue(leadsRef, snapshot => {
  tableBody.innerHTML = "";
  snapshot.forEach(child => {
    const lead = child.val();
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${lead.name}</td><td>${lead.email}</td><td>${new Date(lead.timestamp).toLocaleString()}</td>`;
    tableBody.appendChild(tr);
  });
});
