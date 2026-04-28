import BasicForm from "@/components/forms/basic-form";
import UserTable from "@/components/tables/user-table";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen w-full">
    <BasicForm/>
    <UserTable/>
    </div>
  );
}
