## Fitur ✨

- 📊 **Penyimpanan Data**: Menggunakan Google Sheets API untuk menyimpan dan mengelola data undangan.
- 📱 **Desain Responsif**: Dioptimalkan untuk berbagai ukuran layar.

## Teknologi yang Digunakan 🛠️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Google Sheets API](https://img.shields.io/badge/Google%20Sheets%20API-34A853?style=flat&logo=googlesheets&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-Animate%20On%20Scroll-38B2AC?style=flat)

---

## Cara Menggunakan 🚀

1. **Unduh proyek atau kloning repositori**:
    ```bash
    git clone https://github.com/sandiperdiansah/wedding-invitation.git
    ```

2. **Catatan**: Anda memiliki dua pilihan untuk menggunakan kode sumber ini:
    - **Tanpa Modifikasi**: Buka file [data.js](https://github.com/SandiPerdiansah/wedding-invitation/blob/main/src/assets/data/data.js) untuk langsung menggunakannya.
    - **Dengan Kustomisasi**: Sesuaikan tampilan dan kontennya sesuai kebutuhan Anda.

### Cara Mengedit `data.js` ✏️

- **Detail**: Perbarui nama pengantin, tanggal dan waktu pernikahan, serta alamat lokasi acara.
- **Tautan**:
    - 📅 **Kalender**: Tambahkan URL acara di Google Calendar. Buat acara, tambahkan judul dan deskripsi, lalu simpan. Klik "Bagikan" untuk mendapatkan tautan yang dapat dibagikan.

  ![Membuat Acara](src/assets/images/readme1.png)
  ![Membagikan Acara](src/assets/images/readme2.png)
  ![Salin Tautan](src/assets/images/readme3.png)

    - 📍 **Peta**: Masukkan URL lokasi acara dari Google Maps.
- 🖼️ **Galeri**: Anda bisa menambahkan lebih dari 5 gambar, pastikan ukurannya dioptimalkan untuk web.
- 🎵 **Audio**: Ganti file audio default dan pastikan ukurannya optimal.

### Mengatur Google Sheets API 📜

1. **Buat file Google Sheets**: Buka Google Sheets, buat file baru, dan beri nama sesuai keinginan.

![Pengaturan Spreadsheet](src/assets/images/readme4.png)

2. **Atur Tabel di Google Sheets**:
   ![Tabel Spreadsheet](src/assets/images/readme5.png)
   Struktur tabel: (id, nama, status, pesan, tanggal, warna)

4. **Tambahkan Google Apps Script**:
    - Buka file Google Sheets, masuk ke "Ekstensi" > "Apps Script", lalu tambahkan kode berikut:

    ```javascript
    const SHEET_NAME = 'comentar';

    const doGet = () => {
      try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
        const [, ...data] = sheet.getDataRange().getValues();

        const comentar = data.map(([id, name, status, message, date, color]) => ({
          id,
          name,
          status,
          message,
          date,
          color
        }));

        const response = {
          status: 200,
          message: 'Berhasil mengambil data',
          comentar
        };

        return ContentService
          .createTextOutput(JSON.stringify(response))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        return ContentService
          .createTextOutput(JSON.stringify({ status: 500, message: `Kesalahan: ${error}` }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };

    const doPost = (e) => {
      try {
        const { id, name, status, message, date, color } = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

        if (!sheet) {
          throw new Error(`Sheet "${SHEET_NAME}" tidak ditemukan`);
        }

        sheet.appendRow([id, name, status, message, date, color]);

        return ContentService
          .createTextOutput(JSON.stringify({ status: 200, message: 'Data berhasil ditambahkan' }))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        return ContentService
          .createTextOutput(JSON.stringify({ status: 500, message: `Kesalahan: ${error}` }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };
    ```

5. **Deploy Script**:
    - Klik "Deploy" lalu pilih "Deployment Baru".
    - Pilih "Web app" dalam pengaturan deployment.

![Deploy](src/assets/images/readme8.png)
![Pengaturan Deployment](src/assets/images/readme7.png)
![Setup Deployment](src/assets/images/readme6.png)

Salin URL yang diberikan. Jika terjadi kesalahan, coba deploy ulang karena terkadang ada masalah dengan cross-origin pada percobaan pertama.

---

## Penghargaan Desain 🎨

Proyek ini merupakan redesain dari undangan pernikahan milik [Dewanakl](https://github.com/dewanakl). Tata letak dan desain telah disesuaikan untuk meningkatkan fungsi dan estetika.

---

Terima kasih telah mengunjungi repositori ini. Semoga hari pernikahan Anda berjalan lancar dan penuh kebahagiaan! 😊
