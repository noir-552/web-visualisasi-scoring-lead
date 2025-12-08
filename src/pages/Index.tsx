import { LeadForm } from "@/components/LeadForm";
import { SampleTable } from "@/components/SampleTable";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary text-primary-foreground">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lead Scoring Calculator</h1>
              <p className="text-sm text-muted-foreground">Sistem penilaian customer otomatis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hitung Skor Lead Customer Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gunakan algoritma scoring untuk mengkategorikan customer berdasarkan pendapatan, 
            umur, frekuensi kunjungan, dan riwayat pembelian.
          </p>
        </section>

        {/* Calculator Form */}
        <LeadForm />

        {/* Formula Explanation */}
        <FormulaExplanation />

        {/* Sample Data Table */}
        <SampleTable />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Lead Scoring Calculator - Transformasi Linear dari R⁴ ke R</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
