
//  Belanja Kebutuhan Harian
// 1. Definisikan data array of objects (minimal 6 transaksi barang biasa)
const transaksi = [
    { id: 1, barang: 'Minyak Goreng 2L', harga: 35000, qty: 2, kategori: 'Sembako' },
    { id: 2, barang: 'Gula Pasir 1kg', harga: 16000, qty: 3, kategori: 'Sembako' },
    { id: 3, barang: 'Sabun Mandi', harga: 5000, qty: 4, kategori: 'Kamar Mandi' },
    { id: 4, barang: 'Shampoo Sachet (Renceng)', harga: 11000, qty: 2, kategori: 'Kamar Mandi' },
    { id: 5, barang: 'Telur Ayam 1kg', harga: 28000, qty: 2, kategori: 'Sembako' },
    { id: 6, barang: 'Pasta Gigi', harga: 12000, qty: 1, kategori: 'Kamar Mandi' }
]
console.log("LAPORAN BELANJA KEBUTUHAN HARIAN");

console.log("\n[1] DATA SELURUH TRANSAKSI:");
console.table(transaksi);


// 2. Menggunakan map() & destructuring untuk menghitung subtotal tiap barang
const transaksiDenganSubtotal = transaksi.map(item => {
    const { harga, qty } = item; // Menerapkan destructuring
    return {
        ...item,
        subtotal: harga *qty
    };
});

console.log("\n[2] DATA TRANSAKSI DENGAN SUBTOTAL (Menggunakan map):");
console.table(transaksiDenganSubtotal);


// 3. Menggunakan filter() untuk menyaring kategori tertentu (Contoh: 'Sembako')
const kategoriTarget = 'Sembako';
const transaksiSembako = transaksiDenganSubtotal.filter(
    item => item.kategori === kategoriTarget
);

console.log(`\n[3] HASIL FILTER KATEGORI -> ${kategoriTarget} (Menggunakan filter):`);
console.table(transaksiSembako);


// 4. Menggunakan reduce() untuk menghitung total keseluruhan belanjaan
const totalKeseluruhan = transaksiDenganSubtotal.reduce(
    (total, { subtotal }) => total + subtotal, 
    0
)
console.log(`[4] TOTAL KESELURUHAN BELANJA (Menggunakan reduce):`);
console.log(`Rp ${totalKeseluruhan.toLocaleString('id-ID')}`);