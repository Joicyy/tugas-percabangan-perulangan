function prosesNilai() {
    const inputString = document.getElementById('inputNilai').value;
    const divHasil = document.getElementById('hasil');
    
    divHasil.innerHTML = '';

    // Validasi jika input kosong
    if (inputString.trim() === '') {
        divHasil.innerHTML = '<p style="color: red;">Input tidak boleh kosong. Masukkan angka.</p>';
        return;
    }

    const arrayNilai = inputString.split(',');

    
    // VALIDASI MAKSIMAL INPUT (Maksimal 5 Nilai)
        const MAX_INPUT = 5;
    if (arrayNilai.length > MAX_INPUT) {
        divHasil.innerHTML = `<p style="color: red;">Maksimal input hanya ${MAX_INPUT} nilai sekaligus!</p>`;
        return; // Hentikan program jika melebihi batas
    }

    
    // BAGIAN PERULANGAN (FOR)
        for (let i = 0; i < arrayNilai.length; i++) {
        let nilai = parseInt(arrayNilai[i].trim());
        let predikat = '';

        
        // BAGIAN PERCABANGAN (5 Kondisi)
                if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            predikat = "Data tidak valid / di luar rentang (0-100)";
        } else if (nilai >= 85) {
            predikat = "A (Sangat Baik)";
        } else if (nilai >= 75) {
            predikat = "B (Baik)";
        } else if (nilai >= 60) {
            predikat = "C (Cukup)";
        } else if (nilai >= 50) {
            predikat = "D (Kurang)";
        } else {
            predikat = "E (Gagal)";
        }

        divHasil.innerHTML += `
            <div class="result-item">
                Data ke-${i + 1} &nbsp;|&nbsp; Nilai: <strong>${nilai}</strong> &nbsp;&rightarrow;&nbsp; Predikat: <strong>${predikat}</strong>
            </div>
        `;
    }
}