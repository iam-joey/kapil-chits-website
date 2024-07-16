import { chitData, chitHeader, ChitPlan } from "@/app/chits-plan/data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ChitsTable() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Card>
        <CardHeader className="px-7">
          <CardTitle className="text-4xl text-center">Chits Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {chitHeader.map((data) => (
                  <ChitsHeader heading={data} key={data} />
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {chitData.map((data: ChitPlan, index) => (
                <ChitsDataRow data={data} key={index} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function ChitsHeader({ heading }: { heading: string }) {
  return (
    <>
      <TableHead className="text-right">{heading}</TableHead>
    </>
  );
}

function ChitsDataRow({ data }: { data: ChitPlan }) {
  return (
    <>
      <TableRow className="bg-accent">
        <TableCell className="text-right">{data.ChitValue}</TableCell>
        <TableCell className="text-right">{data.Months}</TableCell>
        <TableCell className="text-right">{data.MinimumInstallment}</TableCell>
        <TableCell className="text-right">{data.MaximumInstallment}</TableCell>
        <TableCell className="text-right">{data.MinimumBidPayable}</TableCell>
        <TableCell className="text-right">{data.MaximumBidPayable}</TableCell>
      </TableRow>
    </>
  );
}
