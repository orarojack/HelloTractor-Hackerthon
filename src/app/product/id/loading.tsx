export default function Loading() {
    return (
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg w-[500px] mx-auto mb-8" />
        <div className="h-10 bg-gray-200 rounded-lg mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg aspect-square" />
          ))}
        </div>
      </div>
    )
  }