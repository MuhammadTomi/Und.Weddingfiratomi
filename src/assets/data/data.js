export const data = {
    bride: {
        L: {
            id: 1,
            name: 'MuhammadTomi ,S.T',
            child: 'Putra ke dua',
            father: 'Marzuki',
            mother: 'Ainul Mardiah (Almarhumah)',
            image: './src/assets/images/profiltomi.png'
        },
        P: {
            id: 2,
            name: 'FiraKamelia ,S.Pd',
            child: 'Putri pertama',
            father: 'Agustiar (Karyawan PT.Arco)',
            mother: 'Yusmidar',
            image: './src/assets/images/profilfira.png'
        },

        couple: './src/assets/images/galery2.jpeg'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'April',
            date: '22',
            day: 'Selasa',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'April',
            date: '26',
            day: 'Sabtu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Dusun. Suka Jadi, RT 000/ RW 000, Desa.Alue Canang, Kec.Birem Bayeun, Kab.Aceh Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/zboxHqzJ7JgAtbBe7',
        map: 'https://maps.app.goo.gl/T8SAmKcGPRtZNgvQ6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/galery5.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/galery1.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/galery2.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/galery3.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/galery4.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'MUHAMMAD TOMI',
            icon: './src/assets/images/bsibaru.png',
            rekening: '7222768343'
        },
        {
            id: 2,
            name: 'FIRA KAMELIA',
            icon: './src/assets/images/bsibaru.png',
            rekening: '7168568187'
        },
    ],

    audio: './src/assets/audio/tm.m4a',

    api: 'https://script.google.com/macros/s/AKfycbzP1pO-F9EqrG0GUqVE36IMDjZXlllWLOZozWO3WKx0bSpL4Qagqz7Bp_T2jMZGb5xypw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
