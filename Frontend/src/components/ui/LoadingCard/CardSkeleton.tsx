export const SkeletonCard = () => (
  <div className=" w-full mx-auto bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg animate-pulse">
    <div className="relative mt-1">
      <div className="w-full h-64 bg-gray-300 rounded-xl"></div>
      <div className="absolute top-0 bg-yellow-100 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg opacity-50"></div>
    </div>
    <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
    <div className="my-2 space-y-2">
      <div className="flex space-x-1 items-center">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex space-x-1 items-center">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex space-x-1 items-center">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded-xl"></div>
    </div>
  </div>
);
