import FeaturedJobCard from "@/components/cards/FeaturedJobCard";
import { SkeletonCard } from "@/components/provider/SkeletonCard";
import { useJobs } from "@/hooks/useJobs";


const AllJobs = () => {
  const { jobs, loading } = useJobs();

  if (loading)
    return (
      <div className="h-screen">
        <SkeletonCard />
      </div>
    );

  return (
    <div className="container py-7 md:py-14 ">
      <h2 className="text-3xl md:text-5xl text-secondary pb-7">
        All listed
        <span className="text-secondary-foreground"> jobs</span>
      </h2>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {jobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
