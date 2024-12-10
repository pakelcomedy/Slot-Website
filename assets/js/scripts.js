const symbols = [
    { name: "🍒", value: 5 },
    { name: "🍋", value: 10 },
    { name: "🍉", value: 15 },
    { name: "🍇", value: 20 },
    { name: "🍊", value: 25 },
    { name: "🍍", value: 30 }
  ];
  
  // Menyesuaikan paylines untuk 6 kolom dan 5 baris
  const paylines = [
    [0, 0, 0, 0, 0, 0], // Horizontal baris atas
    [1, 1, 1, 1, 1, 1], // Horizontal baris kedua
    [2, 2, 2, 2, 2, 2], // Horizontal baris ketiga
    [3, 3, 3, 3, 3, 3], // Horizontal baris keempat
    [4, 4, 4, 4, 4, 4], // Horizontal baris kelima
    [0, 1, 2, 3, 4, 5], // Diagonal kiri ke kanan
    [5, 4, 3, 2, 1, 0], // Diagonal kanan ke kiri
    [0, 1, 2, 3, 4, 5], // Vertical kolom pertama
    [1, 2, 3, 4, 5, 0], // Vertical kolom kedua
    [2, 3, 4, 5, 0, 1], // Vertical kolom ketiga
    [3, 4, 5, 0, 1, 2], // Vertical kolom keempat
    [4, 5, 0, 1, 2, 3], // Vertical kolom kelima
    [5, 0, 1, 2, 3, 4]  // Vertical kolom keenam
  ];
  
  // Fungsi untuk menghasilkan gulungan secara acak
  function spinReels(reelCount, rowCount) {
    const reels = [];
    for (let i = 0; i < reelCount; i++) {
      const reel = [];
      for (let j = 0; j < rowCount; j++) {
        reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      reels.push(reel);
    }
    return reels;
  }
  
  // Fungsi untuk memeriksa kemenangan berdasarkan paylines
  function checkWin(reels, paylines) {
    let totalWin = 0;
    const winningLines = [];
  
    paylines.forEach((line, index) => {
      const firstSymbol = reels[0][line[0]];  // Ambil simbol pertama pada garis
      let isWinningLine = true;
  
      for (let i = 1; i < reels.length; i++) {
        const symbol = reels[i][line[i]];  // Ambil simbol berikutnya sesuai dengan posisi
        // Periksa apakah simbolnya sama, dan bukan wild
        if (symbol.name !== firstSymbol.name) {
          isWinningLine = false;
          break;
        }
      }
  
      if (isWinningLine) {
        totalWin += firstSymbol.value; // Tambahkan kemenangan berdasarkan simbol
        winningLines.push({ lineIndex: index, symbol: firstSymbol.name });
      }
    });
  
    return { totalWin, winningLines };
  }
  
  // Fungsi untuk menampilkan gulungan di tampilan
  function displayReels(reels) {
    for (let i = 0; i < reels.length; i++) {
      const column = document.getElementById(`column-${i + 1}`);
      column.innerHTML = ""; // Clear previous results
      reels[i].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("slot-item");
        div.innerText = item.name;
        column.appendChild(div);
      });
    }
  }
  
  // Contoh penggunaan
  const reels = spinReels(6, 5); // 6 kolom dan 5 baris
  console.log("Reels:", reels);
  displayReels(reels);
  
  const result = checkWin(reels, paylines);
  console.log("Total Win:", result.totalWin);
  console.log("Winning Lines:", result.winningLines);
  