// Fungsi untuk buka tutup detail produk
function toggleDetail(id) {
    const detail = document.getElementById(id);
    if (detail.style.display === "block") {
        detail.style.display = "none";
    } else {
        detail.style.display = "block";
    }
}

// Fungsi untuk kirim WhatsApp
function kirimWA(nomor) {
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;

    if (nama === "" || pesan === "") {
        alert("Mohon isi nama dan pesan.");
        return;
    }

    const teksPesan = `Halo Pakar Cell, saya *${nama}*.%0A%0A*Pesan/Keluhan:*%0A${pesan}`;
    const url = `https://wa.me/${nomor}?text=${teksPesan}`;
    window.open(url, '_blank');
}