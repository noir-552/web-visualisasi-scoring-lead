import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export function FormulaExplanation() {
  return (
    <Card className="shadow-lg bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Info className="w-5 h-5 text-primary" />
          Formula Scoring
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted/30 border border-border font-mono text-sm overflow-x-auto">
          <p className="text-muted-foreground mb-2">// Normalisasi</p>
          <p>pendapatan_n = min(pendapatan, 10.000.000) / 10.000.000</p>
          <p>umur_n = min(umur, 60) / 60</p>
          <p>frek_n = min(frekuensi, 30) / 30</p>
          <p>pernah_beli_n = pernah_beli ? 1 : 0</p>
          <p className="mt-4 text-muted-foreground">// Fungsi scoring (R⁴ → R)</p>
          <p className="text-primary font-semibold">
            skor = 40×pendapatan_n + 20×umur_n + 30×frek_n + 10×pernah_beli_n
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 border border-hot/30 bg-hot/10">
            <div className="font-semibold text-foreground">🔥 Hot Lead</div>
            <div className="text-sm text-muted-foreground">Skor ≥ 80</div>
          </div>
          <div className="p-4 border border-warm/30 bg-warm/10">
            <div className="font-semibold text-foreground">🌤️ Warm Lead</div>
            <div className="text-sm text-muted-foreground">Skor 50 - 79</div>
          </div>
          <div className="p-4 border border-cold/30 bg-cold/10">
            <div className="font-semibold text-foreground">❄️ Cold Lead</div>
            <div className="text-sm text-muted-foreground">Skor &lt; 50</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
