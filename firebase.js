const firebaseConfig = {
  apiKey: "AIzaSyCSoa0NHZVFODfdBQ4DCHihgeYB4mkBQAw",
  authDomain: "actixen-automation.firebaseapp.com",
  databaseURL: "https://actixen-automation-default-rtdb.firebaseio.com",
  projectId: "actixen-automation",
  storageBucket: "actixen-automation.firebasestorage.app",
  messagingSenderId: "925821730810",
  appId: "1:925821730810:web:47bcc0ec27ea6bdb66ee43",
  measurementId: "G-J6PD5X52GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
