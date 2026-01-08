
  const Shimmer = ()=>{
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
            {Array.from({length: 12}).map((_, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-xl p-3 shadow-lg animate-pulse">
                    <div className="w-full h-40 bg-neutral-200 rounded-lg mb-3"/>
                    <div className="w-2/3 h-5 bg-neutral-200 rounded mb-2"/>
                    <div className="w-11/12 h-3.5 bg-neutral-200 rounded mb-2"/>
                    <div className="w-1/2 h-3.5 bg-neutral-200 rounded"/>
                </div>
            ))}
        </div>
    )
}

export default Shimmer
