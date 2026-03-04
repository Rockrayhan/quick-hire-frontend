import { fetchJobById } from "@/api/jobsApi";
import ApplyForm from "@/components/job-details/ApplyForm";
import type { Job } from "@/types/job";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      try {
        if (!id) return;

        const data = await fetchJobById(id);
        setJob(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  if (loading) return <p className="container py-20">Loading...</p>;

  if (!job) return <p>Job not found</p>;

  return (
    <section className="container py-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-6">

          <h1 className="text-3xl md:text-5xl font-bold text-secondary">
            {job.title}
          </h1>

          <p className="text-muted text-lg">
            {job.company} • {job.location}
          </p>

          {/* Category */}
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1">
            {job.category}
          </span>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-xl mb-3 text-secondary">
              Job Description
            </h3>

            <p className="text-muted leading-relaxed">
              {job.description}
            </p>
          </div>

        </div>

        {/* RIGHT APPLY FORM */}
        <div>
         <ApplyForm jobId={job.id} />
        </div>

      </div>

    </section>
  );
};

export default JobDetails;