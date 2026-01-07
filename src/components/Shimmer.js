
 const Shimmer = ()=>{
    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(260px,1fr))] p-5">
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
