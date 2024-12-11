// Firebase Initialization and Imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { getDatabase, ref, set, get, runTransaction } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYp4jeOcEOZ3hPeSR3CtjLyql65Zj5R0U",
    authDomain: "signin-bc305.firebaseapp.com",
    databaseURL: "https://signin-bc305-default-rtdb.firebaseio.com",
    projectId: "signin-bc305",
    storageBucket: "signin-bc305.appspot.com",
    messagingSenderId: "986977895854",
    appId: "1:986977895854:web:fb871a541d87f270faf43f",
    measurementId: "G-QZRVFECM83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

// Set Custom Parameters for Web Client ID
googleProvider.setCustomParameters({
    'client_id': '986977895854-sgl4ingbdvmk9kr0temns8purve38gqq.apps.googleusercontent.com'
});

const symbols = [
    { name: "🍒", value: 50 },
    { name: "🍋", value: 100 },
    { name: "🍉", value: 150 },
    { name: "🍊", value: 200 },
    { name: "🍍", value: 250 },
    { name: "🍇", value: 300 }
];

// Paylines untuk 6 kolom dan 5 tingkat
const paylines = [
    [0, 0, 0, 0, 0, 0], // Horizontal baris atas
    [1, 1, 1, 1, 1, 1], // Horizontal baris kedua
    [2, 2, 2, 2, 2, 2], // Horizontal baris ketiga
    [3, 3, 3, 3, 3, 3], // Horizontal baris keempat
    [4, 4, 4, 4, 4, 4], // Horizontal baris bawah
    [0, 1, 2, 3, 4, 0], // Diagonal kiri ke kanan
    [4, 3, 2, 1, 0, 4], // Diagonal kanan ke kiri
    [0, 0, 1, 1, 2, 2], // Zigzag pola 1
    [2, 2, 3, 3, 4, 4], // Zigzag pola 2
    [0, 1, 1, 2, 2, 3], // Zigzag pola 3
    [1, 0, 2, 0, 3, 0], // Vertikal pola zigzag
    [4, 4, 3, 3, 2, 2], // Zigzag terbalik
    [0, 1, 0, 1, 0, 1], // Pola vertikal baris pertama dan kedua
    [2, 3, 2, 3, 2, 3], // Pola vertikal baris ketiga dan keempat
    [1, 2, 3, 4, 3, 2], // Pola diagonal berliku
    [3, 2, 1, 0, 1, 2], // Pola diagonal berliku terbalik
    [0, 2, 4, 2, 0, 2], // Pola loncat tengah
    [4, 2, 0, 2, 4, 2], // Pola loncat tengah terbalik
    [0, 1, 2, 1, 2, 3], // Pola zigzag terbalik 1
    [3, 2, 1, 2, 1, 0], // Pola zigzag terbalik 2
    [1, 0, 3, 0, 2, 1], // Pola vertikal loncat
    [2, 1, 3, 1, 4, 3], // Pola zigzag vertikal
    [4, 2, 1, 2, 3, 2], // Pola zigzag terbalik 3
    [0, 2, 2, 3, 3, 0], // Pola melingkar 1
    [4, 3, 2, 1, 0, 4], // Pola melingkar 2
    [0, 1, 0, 1, 2, 3], // Pola berputar pertama
    [4, 3, 4, 3, 2, 1], // Pola berputar kedua
    [1, 1, 2, 2, 3, 3], // Pola zigzag vertikal berputar
    [3, 3, 2, 2, 1, 1], // Pola zigzag terbalik berputar
    [0, 0, 0, 3, 3, 3], // Pola horizontal + vertikal
    [4, 4, 1, 2, 3, 0], // Pola mix kiri-kanan
    [0, 1, 0, 3, 4, 1], // Pola mix atas-bawah
    [2, 3, 4, 3, 2, 1], // Pola zigzag besar
    [3, 2, 1, 2, 3, 4], // Pola zigzag terbalik besar
    [1, 0, 2, 3, 1, 4], // Pola campuran besar
    [2, 2, 3, 2, 4, 2], // Pola vertikal tengah
    [3, 3, 2, 3, 1, 3], // Pola vertikal terbalik
    [0, 3, 2, 4, 3, 1], // Pola diagonal menurun
    [4, 1, 3, 0, 1, 2], // Pola diagonal naik
    [0, 3, 4, 2, 1, 0], // Pola zigzag mendatar
    [1, 2, 4, 1, 2, 0], // Pola melingkar naik
    [3, 1, 0, 4, 2, 0], // Pola melingkar turun
    [0, 0, 2, 2, 4, 4], // Pola zigzag tengah
    [3, 1, 4, 2, 3, 0], // Pola vertikal berputar
    [0, 2, 1, 0, 3, 4], // Pola dua arah
    [4, 3, 0, 1, 2, 0], // Pola melingkar diagonal
    [2, 1, 4, 3, 2, 4], // Pola vertikal sirkular
    [3, 0, 1, 3, 0, 2], // Pola vertikal zigzag
    [4, 3, 2, 1, 2, 4], // Pola vertikal terbalik diagonal
    [1, 1, 0, 2, 3, 3], // Pola berputar diagonal
    [0, 3, 1, 2, 4, 0], // Pola campuran diagonal
    [2, 0, 3, 4, 1, 2], // Pola zigzag melengkung
    [4, 2, 0, 3, 1, 4], // Pola vertikal berputar terbalik
    [1, 0, 4, 2, 3, 1], // Pola zigzag campuran
    [0, 2, 3, 1, 4, 0], // Pola berputar terbalik
    [3, 1, 4, 0, 2, 2], // Pola berputar maju
    [2, 3, 4, 1, 0, 0], // Pola campuran diagonal
    [0, 2, 1, 3, 4, 2], // Pola zigzag horizontal
    [1, 3, 4, 2, 0, 1], // Pola diagonal terbalik campuran
    [2, 4, 1, 0, 2, 1], // Pola vertikal berliku
    [4, 0, 3, 1, 2, 4], // Pola melingkar besar
    [3, 2, 4, 1, 3, 2], // Pola sirkular terbalik
    [0, 4, 2, 1, 3, 2], // Pola diagonal campuran terbalik
    [2, 0, 1, 4, 2, 0], // Pola berputar sirkular
    [3, 4, 2, 1, 0, 3], // Pola zigzag berputar
    [4, 1, 3, 4, 2, 0], // Pola diagonal melingkar
    [1, 4, 0, 2, 3, 4], // Pola sirkular besar terbalik
    [2, 1, 3, 4, 2, 0], // Pola vertikal besar
    [3, 2, 0, 4, 1, 3], // Pola diagonal turun
    [4, 0, 2, 3, 1, 0], // Pola berputar campuran
    [0, 1, 3, 2, 4, 0], // Pola zigzag campuran terbalik
    [3, 1, 4, 3, 2, 2], // Pola melingkar diagonal
    [1, 0, 3, 2, 1, 0], // Pola vertikal zigzag campuran
    [2, 3, 1, 4, 2, 3], // Pola melingkar zigzag
    [0, 4, 3, 1, 4, 0], // Pola vertikal melingkar
    [2, 1, 0, 2, 4, 3], // Pola diagonal besar
    [1, 3, 4, 2, 3, 1], // Pola zigzag vertikal besar
    [3, 4, 2, 0, 1, 2], // Pola berputar terbalik besar
    [2, 1, 3, 4, 1, 0], // Pola vertikal melengkung
    [0, 4, 2, 3, 1, 4], // Pola berputar sirkular besar
    [1, 3, 0, 4, 3, 1]  // Pola diagonal zigzag
];

// DOM Elements
const columns = document.querySelectorAll(".slot-items");
const startButton = document.getElementById("start-button");
const balanceDisplay = document.getElementById("balance");
const googleSignInButton = document.getElementById("google-sign-in");

let currentItems = [];
const betAmount = 50;

// Slot Game Logic
function generateRandomSymbols() {
    return Array.from({ length: 5 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
}

function fillColumn(column, items) {
    column.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("slot-item");
        div.textContent = item.name;
        column.appendChild(div);
    });
}

function animateSlots() {
    getBalanceFromFirebase().then(balance => {
        if (balance < betAmount) {
            alert("Insufficient balance to place the bet.");
            return;
        }

        // Update balance immediately on UI before starting animation
        updateLocalBalance(balance - betAmount);

        updateFirebaseBalance(-betAmount);  // Deduct bet amount

        let delay = 0;
        columns.forEach((column, index) => {
            // Initial setup: clear previous state
            column.style.transition = "none";  // Disable transition during the initial setup
            column.style.animation = "none";   // Reset any previous animations
            column.offsetHeight; // Trigger reflow to reset animation (important for smooth restart)

            // Set initial position for smooth animation
            column.style.transform = "translateY(0)"; // Ensure no initial offset

            // After initial setup, start the upward movement
            setTimeout(() => {
                column.style.transition = "transform 2s cubic-bezier(0.2, 0.8, 0.2, 1)"; // Smooth easing function
                column.style.transform = "translateY(-500px)";  // Move column upwards
            }, delay);

            // After upward movement, change the items and bring them back down
            setTimeout(() => {
                // Update column items here after all items are off-screen
                const items = generateRandomSymbols();
                currentItems[index] = items;
                fillColumn(column, items);

                // Return the column back to its original position
                column.style.transition = "transform 2s cubic-bezier(0.2, 0.8, 0.2, 1)";  // Smooth return
                column.style.transform = "translateY(0)";  // End position
            }, delay + 2000);  // Update items after 2 seconds (when the column has gone off-screen)

            delay += 200;  // Stagger the delay for each column
        });

        // Check the result after all columns have finished their animation
        setTimeout(checkResult, delay + 2000);  // Check results after the final animation completes
    });
}

function checkResult() {
    const visibleItems = Array.from(columns).map(column =>
        Array.from(column.querySelectorAll(".slot-item")).map(item => item.textContent)
    );

    let totalWin = 0;
    const winningLines = [];

    document.querySelectorAll(".slot-item").forEach(item => item.classList.remove("spotlight"));

    paylines.forEach((line) => {
        const lineSymbols = line.map((index, i) => visibleItems[i][index]);

        const counts = lineSymbols.reduce((acc, symbol) => {
            acc[symbol] = (acc[symbol] || 0) + 1;
            return acc;
        }, {});

        for (const symbolName in counts) {
            if (counts[symbolName] >= 5) {
                const symbol = symbols.find(s => s.name === symbolName);
                if (symbol) {
                    totalWin += symbol.value * counts[symbolName];
                    line.forEach((index, i) => {
                        const winningItem = columns[i].querySelectorAll(".slot-item")[index];
                        if (winningItem.textContent === symbolName) {
                            winningItem.classList.add("spotlight");
                        }
                    });
                }
            }
        }
    });

    if (totalWin > 0) {
        alert(`Congratulations! You won ${totalWin}!`);
        updateFirebaseBalance(totalWin); // Add winnings to balance
    }
}

// Firebase Balance Management
function updateLocalBalance(balance) {
    balanceDisplay.textContent = balance;
}

function getBalanceFromFirebase() {
    const user = auth.currentUser;
    return new Promise((resolve, reject) => {
        if (user) {
            const userRef = ref(database, "users/" + user.uid + "/balance");
            get(userRef).then(snapshot => {
                if (snapshot.exists()) {
                    resolve(snapshot.val());
                } else {
                    resolve(1000);  // Default balance for new users
                }
            }).catch(error => {
                console.error("Error fetching balance from Firebase:", error);
                reject(error);
            });
        } else {
            reject("No user signed in");
        }
    });
}

function updateFirebaseBalance(amount) {
    const user = auth.currentUser;
    if (user) {
        const userRef = ref(database, "users/" + user.uid + "/balance");

        runTransaction(userRef, (currentBalance) => {
            if (currentBalance === null) {
                return 1000 + amount; // Initialize balance if it doesn't exist
            } else {
                return currentBalance + amount;
            }
        }).then(() => {
            getBalanceFromFirebase().then(balance => {
                updateLocalBalance(balance);
            });
        }).catch(error => {
            console.error("Error updating balance in Firebase:", error);
        });
    }
}

// Firebase Authentication
googleSignInButton.addEventListener("click", () => {
    signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            checkAndCreateUser(user);
        })
        .catch(error => {
            console.error("Error signing in with Google:", error);
        });
});

function checkAndCreateUser(user) {
    const userRef = ref(database, "users/" + user.uid);

    get(userRef).then(snapshot => {
        if (!snapshot.exists()) {
            set(userRef, {
                name: user.displayName,
                email: user.email,
                balance: 1000
            }).then(() => {
                getBalanceFromFirebase().then(balance => {
                    updateLocalBalance(balance);
                });
            }).catch(error => {
                console.error("Error creating user:", error);
            });
        } else {
            goToGame(user);
        }
    }).catch(error => {
        console.error("Error checking user in database:", error);
    });
}

function goToGame(user) {
    getBalanceFromFirebase().then(balance => {
        updateLocalBalance(balance);
    }).catch(error => {
        console.error("Error fetching user data:", error);
    });
}

// Start Button Event Listener
startButton.addEventListener("click", animateSlots);
