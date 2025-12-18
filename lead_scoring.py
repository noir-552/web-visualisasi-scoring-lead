def hitung_skor_lead(pendapatan, umur, frekuensi_kunjungan, pernah_beli):
    # Normalisasi sederhana (bisa kamu jelaskan di slide sebagai contoh fungsi)
    pendapatan_n = min(pendapatan, 10_000_000) / 10_000_000
    umur_n = min(umur, 60) / 60
    frek_n = min(frekuensi_kunjungan, 30) / 30
    pernah_beli_n = 1 if pernah_beli else 0

    # Fungsi scoring (kombinasi linear, ini contoh fungsi dari R^4 ke R)
    skor = (
        40 * pendapatan_n +
        20 * umur_n +
        30 * frek_n +
        10 * pernah_beli_n
    )

    # Skala ke 0–100
    skor = round(skor, 2)

    # Kategori lead
    if skor >= 80:
        kategori = "Hot Lead"
    elif skor >= 50:
        kategori = "Warm Lead"
    else:
        kategori = "Cold Lead"

    return skor, kategori


# Contoh pengujian (bisa jadi “hasil pengujian” di PPT)
data_customers = [
    {"nama": "Andi", "pendapatan": 8000000, "umur": 28, "frek": 10, "pernah_beli": True},
    {"nama": "Budi", "pendapatan": 4000000, "umur": 22, "frek": 3, "pernah_beli": False},
    {"nama": "Citra", "pendapatan": 12000000, "umur": 35, "frek": 20, "pernah_beli": True},
]

for c in data_customers:
    skor, kategori = hitung_skor_lead(
        pendapatan=c["pendapatan"],
        umur=c["umur"],
        frekuensi_kunjungan=c["frek"],
        pernah_beli=c["pernah_beli"]
    )
    print(f"Customer: {c['nama']}, Skor: {skor}, Kategori: {kategori}")
