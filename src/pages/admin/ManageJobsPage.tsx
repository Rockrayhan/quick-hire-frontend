import { Button } from "@/components/ui/button";
import JobTable from "@/components/admin/AllJobsTable";
import JobFormModal from "@/components/admin/JobFormModal";

import { useJobs } from "@/hooks/useJobs";
import { useState } from "react";
import TableSkeleton from "@/components/provider/TableSkeleton";

const AdminJobsPage = () => {
  const { jobs, loading, refetch } = useJobs();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="container mx-auto py-10 space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Jobs</h2>

        <Button onClick={() => setIsModalOpen(true)}>
          Add New Job
        </Button>
      </div>

      {/* Table */}
      {loading ? (
        <TableSkeleton rows={6} cols={5} />
      ) : (
        <JobTable jobs={jobs} onDeleteSuccess={refetch} />
      )}

      {/* Create Job Modal */}
      <JobFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          refetch();          // reload jobs
          setIsModalOpen(false);
        }}
      />
    </section>
  );
};

export default AdminJobsPage;