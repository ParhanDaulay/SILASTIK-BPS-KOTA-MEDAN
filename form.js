function kirimKeWhatsApp() {
    const teksPembuka = "Halo kak. Saya ingin melakukan Permintaan Data kepada Badan Pusat Statistik Kota Medan. Berikut ini ialah identitas diri saya.";

    const nama = document.getElementById ('nama').value;
    const email = document.getElementById ('email').value;
    const handphone = document.getElementById ('handphone').value;
    const jeniskelamin = document.getElementById ('jeniskelamin').value;
    const pendidikan = document.getElementById ('pendidikan').value;
    const pekerjaan = document.getElementById ('pekerjaan').value;
    const instansi = document.getElementById ('instansi').value;
    const permintaan_data = document.getElementById ('permintaan_data').value;

    const teksPenutup = "Demikian permintaan data yang saya sampaikan. Terima kasih atas perhatiannya";

    //Validasi Nama
    const namaRegex = /^[A-Za-z\s]+$/;
    if (nama === "") {
        alert ("Nama tidak boleh kosong!");
        return;
    }

    if (!nama.match(namaRegex)) {
        alert ("Nama hanya boleh mengandung huruf dan spasi!");
        return;
    }

    //Validasi Email
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        alert ("Email tidak boleh kosong!");
        return;
    }

    if (!email.match(emailRegex)) {
        alert ("Masukkan email yang valid!");
        return;
    }

    //Validasi Nomor Handphone
    const handphoneRegex = /^08[0-9]{8,13}$/;
    if (handphone === "") {
        alert ("No. Handphone tidak boleh kosong!");
        return;
    }

    if (!handphone.match(handphoneRegex)) {
        alert ("Masukkan No. Handphone yang valid (hanya angka)!");
        return;
    }

    //Validasi Jenis Kelamin
    if (jeniskelamin === "") {
        alert ("Silahkan pilih jenis kelamin!");
        return;
    }

    //Validasi Pendidikan
    if (pendidikan === "") {
        alert ("Silahkan pilih pendidikan terakhir yang ditamatkan!");
        return;
    }

    //Validasi Pekerjaan
    if (pekerjaan === "") {
        alert ("Silahkan pilih status pekerjaan saat ini!");
        return;
    }

    //Validasi Instansi
    if (instansi === "") {
        alert ("Nama instansi tidak boleh kosong!");
        return;
    }

    //Validasi Permintaan Data
    if (permintaan_data === "") {
        alert ("Silahkan isi permintaan data yang anda inginkan!");
        return;
    }

    const pesan = `
        ${teksPembuka}

        Nama : ${nama}
        Email : ${email}
        No. Handphone : ${handphone}
        Jenis Kelamin : ${jeniskelamin}
        Pendidikan : ${pendidikan}
        Pekerjaan : ${pekerjaan}
        Instansi : ${instansi}
        Permintaan Data : ${permintaan_data}

        ${teksPenutup}
     `;

     const nomorWhatsApp = '+6281363392124';
     const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

     window.open(linkWhatsApp, '_blank');

}