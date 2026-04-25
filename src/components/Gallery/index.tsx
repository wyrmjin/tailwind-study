function Gallery() {
  return (
    <div className="grid min-h-screen grid-cols-1 justify-center gap-4 bg-white p-6 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="group relative cursor-pointer overflow-hidden rounded-lg transition-transform active:scale-95"
        >
          <img
            src={`https://picsum.photos/400/300?random=${i}`}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
          <div className="absolute bottom-0 w-full translate-y-full p-4 text-center text-white transition-transform duration-300 group-hover:translate-y-0 dark:text-gray-400">
            <h1>标题</h1>
            <p>描述文字</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Gallery
