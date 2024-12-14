const SkeletonLoader = () => {
  return (
    <div className="grid  gap-6 mt-[50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-100 dark:bg-gray-900 p-10 rounded-md">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
        >
          <div className="h-36 bg-gray-300 dark:bg-gray-600 rounded-t-md"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md mb-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;