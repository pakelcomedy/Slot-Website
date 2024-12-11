const symbols = [
    { name: "🍒", value: 50 },
    { name: "🍋", value: 100 },
    { name: "🍉", value: 200 },
    { name: "🍊", value: 300 },
    { name: "🍍", value: 400 },
    { name: "🍇", value: 500 }
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

const columns = document.querySelectorAll(".slot-items");
const startButton = document.getElementById("start-button");
const balanceDisplay = document.getElementById("balance");

let currentItems = [];
let balance = 1000;
const betAmount = 50;

function generateRandomSymbols() {
    return Array.from({ length: 5 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
}

function fillColumn(column, items) {
    column.innerHTML = "";
    items.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("slot-item");
        div.textContent = item.name;
        column.appendChild(div);
    });
}

function rotateColumn(column, items) {
    items.push(items.shift());
    fillColumn(column, items);
}

function animateSlots() {
    if (balance < betAmount) {
        alert("Saldo tidak cukup untuk bertaruh.");
        return;
    }

    updateBalance(-betAmount);

    let delay = 0;

    columns.forEach((column, index) => {
        const items = generateRandomSymbols();
        currentItems[index] = items;
        setTimeout(() => {
            fillColumn(column, items);
        }, delay);

        column.style.transition = "none";
        column.style.transform = "translateY(-400px)";

        setTimeout(() => {
            column.style.transition = "transform 2s ease-out";
            column.style.transform = "translateY(0)";
        }, delay);

        delay += 200;
    });

    setTimeout(checkResult, delay + 2000);
}

function checkResult() {
    const visibleItems = Array.from(columns).map(column => {
        const columnItems = Array.from(column.querySelectorAll(".slot-item"));
        return columnItems.map(item => item.textContent);
    });

    let totalWin = 0;
    const winningLines = [];

    paylines.forEach(line => {
        const lineSymbols = line.map((index, i) => visibleItems[i][index]);

        // Count occurrences of each symbol in the line
        const counts = lineSymbols.reduce((acc, symbol) => {
            acc[symbol] = (acc[symbol] || 0) + 1;
            return acc;
        }, {});

        Object.keys(counts).forEach(symbolName => {
            if (counts[symbolName] >=5) { // Winning condition: 3 or more of the same symbol
                const symbol = symbols.find(s => s.name === symbolName);
                if (symbol) {
                    totalWin += symbol.value * counts[symbolName]; // Award based on occurrences
                    winningLines.push({ symbol: symbolName, count: counts[symbolName] });
                }
            }
        });
    });

    if (totalWin > 0) {
        alert(`Selamat! Anda menang ${totalWin}!`);
        updateBalance(totalWin);
    } else {
    }

    console.log("Visible Items:", visibleItems);
    console.log("Winning Lines:", winningLines);
    console.log("Total Win:", totalWin);
}

function updateBalance(amount) {
    balance += amount;
    balanceDisplay.textContent = balance;
}

startButton.addEventListener("click", animateSlots);