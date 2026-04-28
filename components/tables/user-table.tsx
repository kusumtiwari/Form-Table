// components/user-table.tsx
"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import User from "@/types/user";
import userColumns from "../columns/user";


const data: User[] = [
  { firstName: "Kusum", lastName: "Tiwari", email: "kusum@example.com", address: "Kathmandu, Nepal", phone: "9801234567" },
  { firstName: "Aarav", lastName: "Sharma", email: "aarav@example.com", address: "Pokhara, Nepal", phone: "9812345678" },
  { firstName: "Priya", lastName: "Karki", email: "priya@example.com", address: "Lalitpur, Nepal", phone: "9823456789" },
  { firstName: "Rohan", lastName: "Thapa", email: "rohan@example.com", address: "Bhaktapur, Nepal", phone: "9834567890" },
  { firstName: "Sita", lastName: "Rai", email: "sita@example.com", address: "Biratnagar, Nepal", phone: "9845678901" },
];



export default function UserTable() {
  const table = useReactTable({
    data,
    columns:userColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log('table instance:', table);
  console.log(table.getHeaderGroups(), 'header groups of table');

  return (
    <div className="rounded-md border w-4xl">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}