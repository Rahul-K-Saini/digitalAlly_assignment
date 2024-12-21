import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { StudentTable } from "@/components/StudentTable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { AddStudentButton } from "@/components/AddStudentForm/AddStudentButton";

export default function Page() {

  return (
    <div>
      <div className="md:pl-[250px] pl-20">
        <Header />
        <main className="p-4">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex gap-4">
              <Select defaultValue="2024-25">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-25">AY 2024-25</SelectItem>
                  <SelectItem value="2023-24">AY 2023-24</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="cbse9">
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbse9">CBSE 9</SelectItem>
                  <SelectItem value="cbse10">CBSE 10</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AddStudentButton/>
       
          </div>
          <div className="bg-white rounded-lg shadow">
            <Suspense fallback={<TableSkeleton />}>
              <StudentTable />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

function TableSkeleton() {
  const rows = Array.from({ length: 30 });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead className="text-right">
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead className="text-right">
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
          <TableHead className="text-right">
            <Skeleton className="h-4 w-[100px]" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
