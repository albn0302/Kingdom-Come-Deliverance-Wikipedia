// Necessary imports for to get the database to work in the code
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// Variable setups for to check which specific page of the page you're on
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get("page")

// Database setup
const firebaseConfig = {
    apiKey: "AIzaSyAIGmUFW1wVmFWOFcltLoSzGfy0UtKduVU",
    authDomain: "kingdom-come-deliverance-wiki.firebaseapp.com",
    databaseURL: "https://kingdom-come-deliverance-wiki-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kingdom-come-deliverance-wiki",
    storageBucket: "kingdom-come-deliverance-wiki.appspot.com",
    messagingSenderId: "647579696956",
    appId: "1:647579696956:web:1dde14afcb922d54a96839",
    measurementId: "G-XL08V9SG00"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get the data from the database
function getData(page) {
    const pageRef = ref(database, page);
    onValue(pageRef, function (snapshot) {
        const data = snapshot.val()

        // Insert data from database into html elements
        document.querySelector(".headers").innerText = data.title
        document.querySelector(".text").innerText = data.text
        document.querySelector(".images").src = data.image
    })
}

getData(page)