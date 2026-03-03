import { Link } from "react-router-dom";
import RightArrow from "../common/icons/RightArrow";
import LatestJobCard from "../cards/LatestJobCard";
import { useEffect, useState } from "react";
import type { Job } from "@/types/job";
import { fetchJobs } from "@/api/jobsApi";

const LatestJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  return (
    <section className="py-10 md:py-20 bg-light">
      <div className="container">
        {/* section header */}
        <div className="flex justify-between mb-8 md:mb-12 cursor-pointer">
          <h2 className="text-3xl md:text-5xl text-secondary">
            Latest
            <span className="text-secondary-foreground"> jobs open</span>
          </h2>

          <Link
            to="#"
            className="flex items-center gap-2 text-primary font-semibold
               transition-all duration-300
               hover:underline group"
          >
            Show all jobs
            <RightArrow />
          </Link>
        </div>

        {/* section content */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.slice(0, 6).map((job) => (
            <LatestJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
