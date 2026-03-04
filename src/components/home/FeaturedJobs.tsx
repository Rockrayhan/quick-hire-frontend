import { Link } from "react-router-dom";
import FeaturedJobCard from "../cards/FeaturedJobCard";
import RightArrow from "../common/icons/RightArrow";
import { useJobs } from "@/hooks/useJobs";
import { SkeletonCard } from "../provider/SkeletonCard";


const FeaturedJobs = () => {
const { jobs, loading } = useJobs();

  return (
    <section className="py-10 md:py-20 container">

      {/* Header */}
      <div className="flex justify-between mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl text-secondary">
          Featured
          <span className="text-secondary-foreground"> jobs</span>
        </h2>

        <Link
          to="/all-jobs"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Show all jobs
          <RightArrow />
        </Link>
      </div>

      {/* Loading */}
      {loading && <SkeletonCard/>}

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {jobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>

    </section>
  );
};

export default FeaturedJobs;