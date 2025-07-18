import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Replace with your config
const firebaseConfig = {
  apiKey: "AIzaSyCSoa0NHZVFODfdBQ4DCHihgeYB4mkBQAw",
  authDomain: "actixen-automation.firebaseapp.com",
  databaseURL: "https://actixen-automation-default-rtdb.firebaseio.com",
  projectId: "actixen-automation",
  storageBucket: "actixen-automation.firebasestorage.app",
  messagingSenderId: "925821730810",
  appId: "1:925821730810:web:47bcc0ec27ea6bdb66ee43"
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
