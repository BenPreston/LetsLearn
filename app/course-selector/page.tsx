import { DataTable } from "@/components/ui/dataTable";
import WithNavsLayout from "@/components/templates/WithNavsLayout";

export default function CourseSelector() {
  return (
    <WithNavsLayout>
      <div className="p-6">
        <h2 className="mb-6 text-subtitle font-display">
          What do you want to learn?
        </h2>
        <DataTable />
      </div>
    </WithNavsLayout>
  );
}
