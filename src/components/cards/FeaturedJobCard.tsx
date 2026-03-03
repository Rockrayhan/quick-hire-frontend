import { Badge } from "../ui/badge";
import LogoDemo from "../common/logo/LogoDemo";
import type { Job } from "@/types/job";
import { Link } from "react-router-dom";

interface Props {
  job: Job;
}

const FeaturedJobCard = ({ job }: Props) => {
  return (
    <div
      className="group border border-border bg-white p-6
    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <Link to={`/job/${job.id}`}>
        {/* Top */}
        <div className="flex items-start justify-between mb-4">
          <LogoDemo />

          <span className="border border-primary text-primary px-4 py-1">
            Full Time
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg text-secondary group-hover:text-primary transition-colors">
          {job.title}
        </h3>

        {/* Company + Location */}
        <p className="text-sm mt-1">
          {job.company} • {job.location}
        </p>

        {/* Description */}
        <p className="text-sm text-muted mt-4 line-clamp-2">
          {job.description}
        </p>

        {/* Category */}
        <div className="mt-6">
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            {job.category}
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedJobCard;
