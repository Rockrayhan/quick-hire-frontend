import { deleteJob } from "@/api/jobsApi";
import { Button } from "../ui/button";
import { toast } from "sonner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="border rounded-lg bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-15">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={job.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.category}</TableCell>
              <TableCell className="text-center">
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobTable;