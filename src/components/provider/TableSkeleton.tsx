import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  rows?: number;
  cols?: number;
};

const TableSkeleton = ({ rows = 5, cols = 5 }: Props) => {
  return (
    <div className="w-full border rounded-xl overflow-hidden">
      {/* Table Header */}
      <div className="grid gap-4 p-4 border-b"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-full" />
        ))}
      </div>

      {/* Table Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4 p-4 border-b last:border-0"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 w-full" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;