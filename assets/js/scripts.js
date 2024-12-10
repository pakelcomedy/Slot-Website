const symbols = ["🍒", "🍋", "🍉", "🍇", "🍊", "🍍"];
const columns = document.querySelectorAll(".slot-items");
const startButton = document.getElementById("start-button");

let currentItems = [];  // Array untuk menyimpan item yang sudah ada di setiap kolom

function generateRandomSymbols() {
    return Array.from({ length: 15 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
}

function fillColumn(column, items) {
    column.innerHTML = ""; // Clear column
    items.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("slot-item");
        div.textContent = item;
        column.appendChild(div);
    });
}

// Fungsi untuk memutar kolom dengan menggulir item yang ada
function rotateColumn(column, items) {
    // Geser semua item ke atas
    items.push(items.shift()); // Menggeser elemen pertama ke akhir array
    fillColumn(column, items); // Isi kolom dengan array yang sudah digeser
}

// Fungsi untuk mengatur animasi perputaran
function animateSlots() {
    let delay = 0; // Initial delay for the first column

    columns.forEach((column, index) => {
        if (currentItems[index]) {
            // Jika sudah ada item, putar kolom
            setTimeout(() => {
                rotateColumn(column, currentItems[index]);
            }, delay);
        } else {
            // Jika belum ada item, isi dengan simbol acak
            const items = generateRandomSymbols();
            currentItems[index] = items; // Simpan item yang baru
            setTimeout(() => {
                fillColumn(column, items);
            }, delay);
        }

        // Reset posisi untuk animasi putaran
        column.style.transition = "none";
        column.style.transform = "translateY(-1200px)"; // Total height for 15 items (15 * 80px)

        // Animasi untuk menunjukkan item mengisi kolom
        setTimeout(() => {
            column.style.transition = "transform 2s ease-out";
            column.style.transform = "translateY(0)";
        }, delay);

        // Increment delay untuk menciptakan efek kiri ke kanan
        delay += 200; // Sesuaikan waktu untuk efek yang diinginkan
    });
}

startButton.addEventListener("click", animateSlots);
