import { Link } from "react-router-dom";

import FeaturedJobCard from "../cards/FeaturedJobCard";
import RightArrow from "../common/icons/RightArrow";

const FeaturedJobs = () => {
  return (
    <section className="pt-10 md:pt-20  container">
      {/* section header */}
      <div className="flex justify-between mb-8 md:mb-12 cursor-pointer">
        <h2 className="text-3xl md:text-5xl text-secondary">
          Featured
          <span className="text-secondary-foreground"> jobs</span>
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
        <FeaturedJobCard/>
      </div>
    </section>
  );
};

export default FeaturedJobs;
