/* eslint-disable @next/next/no-img-element */
export const HomeTrending = () => {
  return (
    <div className="flex flex-col w-full px-3">
      <h1 className="flex py-5 font-bold text-4xl text-gray-800">Top Categories</h1>
      <div className="flex flex-row gap-5 overflow-scroll w-full">
        {Array(12)
          .fill(0)
          .map((_, i) => (
              <img key={i} src={`./assets/${i + 1}.jpg`} alt="img" width={200} height={300} className="rounded-2xl" />
          ))}
      </div>
    </div>
  );
};
