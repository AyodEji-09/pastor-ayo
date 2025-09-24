import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({
  count,
  circle,
  className,
  height,
}: {
  count: number;
  circle?: boolean;
  className: string;
  height: number;
}) => {
  return (
    <Skeleton
      count={count}
      circle={circle}
      className={className}
      height={height}
    />
  );
};

export default SkeletonLoader;
