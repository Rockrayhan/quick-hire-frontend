import { SkeletonCard } from "@/components/provider/SkeletonCard";
import { useJobs } from "@/hooks/useJobs";
import { Briefcase, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { jobs, loading } = useJobs();

  if (loading)
    return (
      <div className="h-screen">
        <SkeletonCard />
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl text-secondary ">Admin Dashboard</h1>
        <p className="text-secondary">Overview of platform activity</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Jobs Card */}
        <div className="bg-white  rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
          <Link to="/admin/manage-jobs">
            <div className="flex items-center justify-between">
              <h6 className="text-secondary">Total Jobs</h6>

              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Briefcase size={20} />
              </div>
            </div>

            <p className="text-3xl font-bold mt-4"> {jobs.length} </p>
          </Link>
        </div>

        {/* Applications Card */}
        <div className="bg-white  rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between">
            <h6 className="text-secondary">Applications</h6>

            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
              <FileText size={20} />
            </div>
          </div>

          <p className="text-3xl font-bold mt-4"> -- </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
