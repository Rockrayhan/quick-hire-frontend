import { useState, useMemo } from "react";
import FeaturedJobCard from "@/components/cards/FeaturedJobCard";
import { SkeletonCard } from "@/components/provider/SkeletonCard";
import { useJobs } from "@/hooks/useJobs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AllJobs = () => {
  const { jobs, loading } = useJobs();

  const categories = ["all", ...new Set(jobs.map((job) => job.category))];

  /* ======================
     FILTER STATES
  ====================== */
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  /* ======================
     FRONTEND FILTER
  ====================== */
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "all" || job.category === category;

      return matchSearch && matchCategory;
    });
  }, [jobs, search, category, location]);

  /* ======================
     LOADING
  ====================== */

  return (
    <div className="container py-7 md:py-14 space-y-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl text-secondary">
        All listed
        <span className="text-secondary-foreground"> jobs</span>
      </h2>

      {/* ======================
          SEARCH + FILTER
      ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <Input
          placeholder="Search job or company..."
          className="placeholder:text-muted"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
          <Select onValueChange={setCategory} defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

      </div>

      {/* show job cards */}

      {loading && <SkeletonCard />}

      {filteredJobs.length === 0 ? (
        <p className="text-muted-foreground">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {filteredJobs.map((job) => (
            <FeaturedJobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
