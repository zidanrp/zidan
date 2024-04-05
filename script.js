let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2},
  ];
  
  function checkStock() {
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let pilihan = document.getElementById('pilihan').value;
  
    if (isNaN(jumlah) || jumlah === 0) {
      alert("Jumlah tidak boleh kosong");
    } else {
      let bukuDitemukan = false;
      for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihan) {
          bukuDitemukan = true;
          if (jumlah > buku[i].jumlah) {
            alert("Jumlah buku tidak tersedia");
          } else {
            alert("Silahkan ambil buku Anda");
          }
          break;
        }
      }
      if (!bukuDitemukan) {
        alert("Buku tidak ditemukan");
      }
    }
  }
  