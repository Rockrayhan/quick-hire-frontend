import { Badge } from "../ui/badge";
import LogoDemo from "../common/logo/LogoDemo";
import { MapPin, Briefcase } from "lucide-react";

const LatestJobCard = () => {
  return (
    <div className="group bg-white border border-border  p-6 
    transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">

      <div className="flex flex-col md:flex-row md:items-start gap-6">

        {/* Company Logo */}
        <div className="shrink-0  md:mt-2">
          <LogoDemo />
        </div>

        {/* Job Info */}
        <div className="flex-1">

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground 
          group-hover:text-primary transition-colors">
            Social Media Assistant
          </h3>

          {/* Company + Location */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mt-1">
            <span>Webflow</span>

            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Hamburg, Germany
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-4">

            <Badge
              variant="secondary"
              className="flex items-center gap-1"
            >
              <Briefcase className="w-3 h-3" />
              Full Time
            </Badge>

            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              Marketing
            </Badge>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LatestJobCard;