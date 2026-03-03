import RightArrow from "../common/icons/RightArrow";


interface JobsCategoryCardProps {
  title: string;
  jobsAvailable: number;
  icon: React.ElementType;
}

const JobsCategoryCard = ({
  title,
  jobsAvailable,
  icon: Icon,
}: JobsCategoryCardProps) => {
  return (
    <div
      className="
      group
      border border-muted-foreground
      p-8
      flex flex-col gap-3
      cursor-pointer
      transition-all duration-300 ease-in-out
      hover:bg-primary hover:text-white hover:border-primary
      "
    >
      {/* Icon */}
      <Icon className="w-12 h-12 text-primary transition-colors duration-300 group-hover:text-white" />

      {/* Title */}
      <h6 className="text-2xl font-semibold text-secondary group-hover:text-white">{title}</h6>

      {/* Jobs */}
      <p className="flex gap-2 items-center text-muted transition-colors duration-300 group-hover:text-white">
        {jobsAvailable} jobs available
        <RightArrow/>
      </p>
    </div>
  );
};

export default JobsCategoryCard;
