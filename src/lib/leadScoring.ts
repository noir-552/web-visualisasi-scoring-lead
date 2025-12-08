export interface CustomerData {
  nama: string;
  pendapatan: number;
  umur: number;
  frekuensiKunjungan: number;
  pernahBeli: boolean;
}

export type LeadCategory = "Hot Lead" | "Warm Lead" | "Cold Lead";

export interface LeadResult {
  skor: number;
  kategori: LeadCategory;
}

export function hitungSkorLead(
  pendapatan: number,
  umur: number,
  frekuensiKunjungan: number,
  pernahBeli: boolean
): LeadResult {
  // Normalisasi sederhana
  const pendapatanN = Math.min(pendapatan, 10_000_000) / 10_000_000;
  const umurN = Math.min(umur, 60) / 60;
  const frekN = Math.min(frekuensiKunjungan, 30) / 30;
  const pernahBeliN = pernahBeli ? 1 : 0;

  // Fungsi scoring (kombinasi linear dari R^4 ke R)
  let skor =
    40 * pendapatanN +
    20 * umurN +
    30 * frekN +
    10 * pernahBeliN;

  // Skala ke 0–100
  skor = Math.round(skor * 100) / 100;

  // Kategori lead
  let kategori: LeadCategory;
  if (skor >= 80) {
    kategori = "Hot Lead";
  } else if (skor >= 50) {
    kategori = "Warm Lead";
  } else {
    kategori = "Cold Lead";
  }

  return { skor, kategori };
}

export const sampleCustomers: CustomerData[] = [
  { nama: "Andi", pendapatan: 8000000, umur: 28, frekuensiKunjungan: 10, pernahBeli: true },
  { nama: "Budi", pendapatan: 4000000, umur: 22, frekuensiKunjungan: 3, pernahBeli: false },
  { nama: "Citra", pendapatan: 12000000, umur: 35, frekuensiKunjungan: 20, pernahBeli: true },
  { nama: "Dewi", pendapatan: 6000000, umur: 45, frekuensiKunjungan: 15, pernahBeli: true },
  { nama: "Eko", pendapatan: 3000000, umur: 19, frekuensiKunjungan: 2, pernahBeli: false },
];
