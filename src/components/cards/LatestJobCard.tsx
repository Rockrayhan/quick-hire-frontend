import { Badge } from "../ui/badge";
import LogoDemo from "../common/logo/LogoDemo";
import { MapPin, Briefcase } from "lucide-react";
import type { Job } from "@/types/job";
import { Link } from "react-router-dom";

interface Props {
  job: Job;
}

const LatestJobCard = ({ job }: Props) => {
  return (
    <div
      className="group bg-white border border-border  p-6 
    transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
    >
      <Link to={`/job/${job.id}`}>
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Company Logo */}
          <div className="shrink-0  md:mt-2">
            <LogoDemo />
          </div>

          {/* Job Info */}
          <div className="flex-1">
            {/* Title */}
            <h3
              className="text-lg font-semibold text-foreground 
          group-hover:text-primary transition-colors"
            >
              {job.title}
            </h3>

            {/* Company + Location */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mt-1">
              <span>{job.company}</span>

              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
               {job.location}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Badge  className="flex items-center gap-1 bg-secondary-foreground">
                <Briefcase className="w-3 h-3" />
                Full Time
              </Badge>

              <Badge className="bg-blue-50 text-primary hover:bg-blue-100">
                 {job.category}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestJobCard;
