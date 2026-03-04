import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { fetchJobs } from "../../api/jobsApi";
import { SkeletonCard } from "@/components/provider/SkeletonCard";
import JobTable from "@/components/admin/AllJobsTable";
import JobFormModal from "@/components/admin/JobFormModal";


const AdminJobsPage = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load all jobs
  const loadJobs = async () => {
    setLoading(true);
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <section className="container mx-auto py-10 space-y-6">
      {/* Header + Add Job Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Jobs</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add New Job</Button>
      </div>

      {/* Job Table */}
      {loading ? (
        <SkeletonCard />
      ) : (
        <JobTable jobs={jobs} onDeleteSuccess={loadJobs} />
      )}

      {/* Job Form Modal */}
      <JobFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          loadJobs();
          setIsModalOpen(false); // close modal after success
        }}
      />
    </section>
  );
};

export default AdminJobsPage;