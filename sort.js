const angka = [5, 1, 9, 3, 7];

// Urutkan dari kecil ke besar
const naik = [...angka].sort((a, b) => a - b);

// Urutkan dari besar ke kecil
const turun = [...angka].sort((a, b) => b - a);

console.log('Naik:', naik);
console.log('Turun:', turun);
