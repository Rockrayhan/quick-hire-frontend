import { deleteJob } from "@/api/jobsApi";
import { Button } from "../ui/button";

import { toast } from "sonner";

type Props = {
  jobs: any[];
  onDeleteSuccess: () => void;
};

const JobTable = ({ jobs, onDeleteSuccess }: Props) => {
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    try {
      await deleteJob(id);
      toast.success("Job deleted ✅");
      onDeleteSuccess();
    } catch {
      toast.error("Failed to delete job");
    }
  };

  return (
    <div className="overflow-x-auto border rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{job.id}</td>
              <td className="px-4 py-2">{job.title}</td>
              <td className="px-4 py-2">{job.company}</td>
              <td className="px-4 py-2">{job.location}</td>
              <td className="px-4 py-2">{job.category}</td>
              <td className="px-4 py-2 text-center">
                <Button size="sm" variant="destructive" onClick={() => handleDelete(job.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;