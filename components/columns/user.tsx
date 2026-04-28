import { ColumnDef } from "@tanstack/react-table";
import User from "@/types/user";

const userColumns: ColumnDef<User>[] = [
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "phone", header: "Phone" },
];

export default userColumns;