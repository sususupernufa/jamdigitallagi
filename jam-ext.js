function updateJam() {
    const now = new Date();

    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    // format 2 digit
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    // tampilkan jam
    document.getElementById("jam").innerHTML = `${jam}:${menit}:${detik}`;

    // tampilkan tanggal
    document.getElementById("tanggal").innerHTML =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;
}

// jalan tiap detik
setInterval(updateJam, 1000);

// panggil pertama
updateJam();
