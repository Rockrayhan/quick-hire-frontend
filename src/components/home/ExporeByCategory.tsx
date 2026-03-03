import { Link } from "react-router-dom";

import JobsCategoryCard from "../cards/JobsCategoryCard";
import {
  Palette,
  Code,
  Megaphone,
  Briefcase,
  Database,
  Headphones,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import RightArrow from "../common/icons/RightArrow";


const jobCategories = [
  {
    title: "Design",
    jobsAvailable: 235,
    icon: Palette,
  },
  {
    title: "Development",
    jobsAvailable: 320,
    icon: Code,
  },
  {
    title: "Marketing",
    jobsAvailable: 180,
    icon: Megaphone,
  },
  {
    title: "Business",
    jobsAvailable: 90,
    icon: Briefcase,
  },
  {
    title: "Data Science",
    jobsAvailable: 140,
    icon: Database,
  },
  {
    title: "Customer Support",
    jobsAvailable: 110,
    icon: Headphones,
  },
  {
    title: "Sales",
    jobsAvailable: 200,
    icon: LineChart,
  },
  {
    title: "Cyber Security",
    jobsAvailable: 75,
    icon: ShieldCheck,
  },
];

const ExporeByCategory = () => {
  return (
    <section className="pt-10 md:pt-20 container">

      {/* section header */}
      <div className="flex justify-between mb-8 md:mb-12 cursor-pointer">
        <h2 className="text-3xl md:text-5xl text-secondary">
          Explore by
          <span className="text-secondary-foreground"> category</span>
        </h2>

        <Link
          to=""
          className="flex items-center gap-2 text-primary font-semibold
               transition-all duration-300
               hover:underline group"
        >
          Show all jobs
          <RightArrow/>
          
        </Link>
      </div>

    {/* section content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {jobCategories.map((category, index) => (
          <JobsCategoryCard
            key={index}
            title={category.title}
            jobsAvailable={category.jobsAvailable}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ExporeByCategory;
