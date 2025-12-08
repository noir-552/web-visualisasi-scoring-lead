import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { hitungSkorLead, LeadResult } from "@/lib/leadScoring";
import { ScoreGauge } from "./ScoreGauge";
import { Calculator, User, Wallet, Calendar, ShoppingCart, RotateCcw } from "lucide-react";

export function LeadForm() {
  const [nama, setNama] = useState("");
  const [pendapatan, setPendapatan] = useState("");
  const [umur, setUmur] = useState("");
  const [frekuensi, setFrekuensi] = useState("");
  const [pernahBeli, setPernahBeli] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);

  const handleCalculate = () => {
    const skorResult = hitungSkorLead(
      Number(pendapatan) || 0,
      Number(umur) || 0,
      Number(frekuensi) || 0,
      pernahBeli
    );
    setResult(skorResult);
  };

  const handleReset = () => {
    setNama("");
    setPendapatan("");
    setUmur("");
    setFrekuensi("");
    setPernahBeli(false);
    setResult(null);
  };

  const formatRupiah = (value: string) => {
    const number = value.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calculator className="w-5 h-5 text-primary" />
            Input Data Customer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nama" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nama Customer
            </Label>
            <Input
              id="nama"
              placeholder="Masukkan nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pendapatan" className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Pendapatan (Rp)
            </Label>
            <Input
              id="pendapatan"
              placeholder="Contoh: 5.000.000"
              value={formatRupiah(pendapatan)}
              onChange={(e) => setPendapatan(e.target.value.replace(/\D/g, ""))}
            />
            <p className="text-xs text-muted-foreground">Maksimum perhitungan: Rp 10.000.000</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="umur" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Umur (tahun)
            </Label>
            <Input
              id="umur"
              type="number"
              placeholder="Contoh: 25"
              min={0}
              max={100}
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">Maksimum perhitungan: 60 tahun</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="frekuensi" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Frekuensi Kunjungan (per bulan)
            </Label>
            <Input
              id="frekuensi"
              type="number"
              placeholder="Contoh: 5"
              min={0}
              max={100}
              value={frekuensi}
              onChange={(e) => setFrekuensi(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">Maksimum perhitungan: 30 kunjungan</p>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/20 border border-border">
            <Label htmlFor="pernahBeli" className="flex items-center gap-2 cursor-pointer">
              <ShoppingCart className="w-4 h-4" />
              Pernah Membeli Sebelumnya?
            </Label>
            <Switch
              id="pernahBeli"
              checked={pernahBeli}
              onCheckedChange={setPernahBeli}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleCalculate} className="flex-1" size="lg">
              <Calculator className="w-4 h-4 mr-2" />
              Hitung Skor
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Hasil Scoring</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          {result ? (
            <div className="text-center space-y-4">
              {nama && (
                <p className="text-lg text-muted-foreground">
                  Customer: <span className="font-semibold text-foreground">{nama}</span>
                </p>
              )}
              <ScoreGauge score={result.skor} category={result.kategori} />
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <Calculator className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p>Masukkan data customer dan klik "Hitung Skor"</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
