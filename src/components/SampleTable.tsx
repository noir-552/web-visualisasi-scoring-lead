import { sampleCustomers, hitungSkorLead, LeadCategory } from "@/lib/leadScoring";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export function SampleTable() {
  const getCategoryVariant = (kategori: LeadCategory) => {
    switch (kategori) {
      case "Hot Lead":
        return "hot";
      case "Warm Lead":
        return "warm";
      case "Cold Lead":
        return "cold";
    }
  };

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Users className="w-5 h-5 text-primary" />
          Contoh Data Customer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead className="text-right">Pendapatan</TableHead>
                <TableHead className="text-center">Umur</TableHead>
                <TableHead className="text-center">Frek. Kunjungan</TableHead>
                <TableHead className="text-center">Pernah Beli</TableHead>
                <TableHead className="text-center">Skor</TableHead>
                <TableHead className="text-center">Kategori</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleCustomers.map((customer) => {
                const { skor, kategori } = hitungSkorLead(
                  customer.pendapatan,
                  customer.umur,
                  customer.frekuensiKunjungan,
                  customer.pernahBeli
                );
                return (
                  <TableRow key={customer.nama}>
                    <TableCell className="font-medium">{customer.nama}</TableCell>
                    <TableCell className="text-right">
                      {formatRupiah(customer.pendapatan)}
                    </TableCell>
                    <TableCell className="text-center">{customer.umur}</TableCell>
                    <TableCell className="text-center">{customer.frekuensiKunjungan}</TableCell>
                    <TableCell className="text-center">
                      {customer.pernahBeli ? "✓" : "✗"}
                    </TableCell>
                    <TableCell className="text-center font-bold">{skor}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getCategoryVariant(kategori)}>{kategori}</Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
