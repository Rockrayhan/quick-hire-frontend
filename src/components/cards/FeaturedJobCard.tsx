import { Badge } from "../ui/badge";
import LogoDemo from "../common/logo/LogoDemo";

const FeaturedJobCard = () => {
  return (
    <div className="group  border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      
      {/* Top */}
      <div className="flex items-start justify-between mb-4">
        <LogoDemo />

        <span
          className="border border-primary text-primary font-medium px-4 py-1"
        >
          Full Time
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-lg text-secondary group-hover:text-primary transition-colors">
        Email Marketing Specialist
      </h3>

      {/* Company + Location */}
      <p className="text-sm  mt-1">
        Google • Dhaka, Bangladesh
      </p>

      {/* Description */}
      <p className="text-sm text-muted mt-4 line-clamp-2">
        Company is looking for a Customer Marketing Manager to join the
        marketing team and improve campaign performance.
      </p>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-6">
        <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          Marketing
        </Badge>

      </div>
    </div>
  );
};

export default FeaturedJobCard;